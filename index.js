const mongoose = require("mongoose")
const { ApolloServer, UserInputError, gql } = require("apollo-server")
const jwt = require("jsonwebtoken")
const { createApolloFetch } = require("apollo-fetch")
const geocode = require("./apis/rest/geocode")
const http = require("http")

const httpServer = http.createServer(geocode)
httpServer.listen(3003, () => {
  console.log("http geocode server running on port 3003")
})

const HSL_ROUTE_API_URI =
  "https://api.digitransit.fi/routing/v1/routers/next-hsl/index/graphql"

const fetch = new createApolloFetch({ uri: HSL_ROUTE_API_URI })

console.log("connecting to", HSL_ROUTE_API_URI)

const typeDefs = gql`
  type Query {
    allStops: [Stop!]!
    planRoute(
      latFrom: Float
      lonFrom: Float
      latTo: Float
      lonTo: Float
      numItineraries: Int
      date: String
      time: String
    ): [Itinerary]
  }
  type Stop {
    code: String
    name: String
  }
  type Itinerary {
    walkDistance: Float
    duration: Int
    legs: [Leg]
  }
  type Leg {
    mode: String
    startTime: Float
    endTime: Float
    from: From
    to: To
    distance: Float
    trip: Trip
    legGeometry: LegGeometry
  }
  type LegGeometry {
    points: String
  }
  type From {
    lat: Float
    lon: Float
    name: String
    stop: Stop
  }
  type To {
    lat: Float
    lon: Float
    name: String
  }
  type Trip {
    route: Route
    tripHeadsign: String
    stops: Stop
  }
  type Route {
    shortName: String
    longName: String
  }
`
const resolvers = {
  Query: {
    allStops: async () => {
      const res = await fetch({
        query: `query {
          stops {
              name
          }
        }`
      })
      console.log("res:", res.data.stops)
      return res.data.stops
    },
    planRoute: async (root, args) => {
      console.log("vars", args)

      const res = await fetch({
        query: `query {
          plan(
            from: {lat: ${args.latFrom}, lon: ${args.lonFrom}}
            to: {lat: ${args.latTo}, lon: ${args.lonTo}}
            date: "${args.date}"
            time: "${args.time}"
            numItineraries: 5
          )
          {
            itineraries {
              walkDistance,
              duration,
              legs {
                legGeometry{
                  points
                }
                trip {
                  route {
                    shortName
                    longName
                  }
                  tripHeadsign
                  stops {
                    name
                  }
                }
                mode
                startTime
                endTime
                from {
                  lat
                  lon
                  name
                  stop {
                    code
                    name
                  }
                },
                to {
                  lat
                  lon
                  name
                },
                  distance
                }
              }
            }
          }`
      })
      console.log("responseboi: ", res)
      return res.data.plan.itineraries
    }
  }
}
const server = new ApolloServer({ typeDefs, resolvers })
server.listen().then(({ url }) => console.log("sever ready at", url))
