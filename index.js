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
    planRoute(lat: Float!, lon: Float!): [Itinerary]
  }
  type Stop {
    name: String!
  }
  type Itinerary {
    walkDistance: Float
    duration: Int
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
      const res = await fetch({
        query: `query {
          plan(
            from: {lat: ${args.lat}, lon: ${args.lon}}
            to: {lat: 60.175294, lon: 24.684855}
          )
          {
            itineraries {
              walkDistance
              duration
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
