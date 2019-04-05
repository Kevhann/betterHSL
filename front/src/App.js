import React from 'react'
import { useApolloClient } from 'react-apollo-hooks'
import { gql } from 'apollo-boost'
import { useQuery, useMutation } from 'react-apollo-hooks'
import { Subscription } from 'react-apollo'
import SearchForm from './components/SearchForm'
import { Container } from 'semantic-ui-react'

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
      Hello Team!
      <SearchForm />
    </Container>
  )
}

export default App
