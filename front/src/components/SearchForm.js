import React, { useState } from "react"
import { useApolloClient } from "react-apollo-hooks"
import { gql } from "apollo-boost"
import axios from "axios"

const planRoute = gql`
  query planRoute($lat: Float, $lon: Float) {
    planRoute(lat: $lat, lon: $lon) {
      Itinerary {
        walkDistance
        duration
      }
    }
  }
`

const SearchForm = () => {
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  console.log("from: ", from)
  console.log("to: ", to)
  const client = useApolloClient()

  const submit = async event => {
    event.preventDefault()
    const res = await axios.get(
      "https://api.digitransit.fi/geocoding/v1/search?text=kamppi"
    )
    console.log("res: ", res.data.features[0].geometry.coordinates)
    console.log("res: ", res.data.features[0].geometry.coordinates[0])
    console.log("res: ", res.data.features[0].geometry.coordinates[1])

    const plannedRoute = await client.query({
      query: planRoute,
      variables: { lat: res[0], lon: res[1] }
    })
    console.log("planned route: ", plannedRoute)

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
    </form>
  )
}

export default SearchForm
