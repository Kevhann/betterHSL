import React, { useState } from "react"
import { useApolloClient, useQuery, useMutation } from "react-apollo-hooks"
import { gql } from "apollo-boost"
import axios from "axios"
import Route from "./Route"

const planRoute = gql`
  query planRoute($lat: Float, $lon: Float) {
    planRoute(lat: $lat, lon: $lon) {
      walkDistance
      duration
    }
  }
`

const SearchForm = () => {
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  const [routes, setRoutes] = useState([])
  console.log("from: ", from)
  console.log("to: ", to)
  const client = useApolloClient()
  // const lad = 60.169022
  // const lod = 24.931691
  // const plannedRoute = useQuery(planRoute, {
  //   variables: { lat: lad, lon: lod }
  // })

  const submit = async event => {
    event.preventDefault()
    const res = await axios.get(
      "https://api.digitransit.fi/geocoding/v1/search?text=kamppi"
    )

    const coordinates = res.data.features[0].geometry.coordinates

    const plannedRoute = await client.query({
      query: planRoute,
      variables: {
        lat: coordinates[1],
        lon: coordinates[0]
      }
    })
    console.log("planned route search formissa: ", plannedRoute.data.planRoute)
    const newRoutes = plannedRoute.data.planRoute
    setRoutes(newRoutes)

    setFrom("")
    setTo("")
  }

  return (
    <form onSubmit={submit}>
      <div>
        From: <input value={from} onChange={e => setFrom(e.target.value)} />
      </div>
      <div>
        To: <input value={to} onChange={e => setTo(e.target.value)} />
      </div>
      <div>
        <button type="submit">click me</button>
      </div>
      <div>
        {routes.map(r => (
          <div key={r.duration}>
            <Route walkdistance={r.walkDistance} duration={r.duration} />
          </div>
        ))}
      </div>
    </form>
  )
}

export default SearchForm
