import React from "react"
import { useApolloClient } from "react-apollo-hooks"
import { gql } from "apollo-boost"
import { useQuery, useMutation } from "react-apollo-hooks"
import { Subscription } from "react-apollo"
import SearchForm from "./components/SearchForm"

const App = props => {
  console.log("memes")

  return (
    <div>
      Hello Team!
      <SearchForm />
    </div>
  )
}

export default App
