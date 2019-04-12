import React from "react"
import { Container } from "semantic-ui-react"
import AutocompleteForm from "./components/AutocompleteSearchForm"
import SearchForm from "./components/SearchForm"
import { Header } from "semantic-ui-react"

// const planRoute = gql`
//   query planRoute($lat: Float, $lon: Float) {
//     planRoute(lat: $lat, lon: $lon) {
//       walkDistance
//       duration
//     }
//   }
// `

const App = props => {
  // console.log("memes")
  // const lad = 60.169022
  // const lod = 24.931691
  // const plannedRoute = useQuery(planRoute, {
  //   variables: { lat: lad, lon: lod }
  // })
  //console.log("planned route: ", plannedRoute)

  return (
    <Container>
      <Header size="huge">Better HSL</Header>
      <SearchForm />
      {/*<AutocompleteForm fieldName={'from'} />
      <AutocompleteForm fieldName={'to'} />*/}
    </Container>
  )
}

export default App
