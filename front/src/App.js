import React from "react"
import { Container, Header } from "semantic-ui-react"
import SearchForm from "./components/SearchForm"
import BackgroundMap from "./components/BackgroundMap"
import "./styles.css"

const App = () => {
  return (
    <>
      <BackgroundMap />
      <Container>
        <Header size="huge">Better HSL</Header>
        <SearchForm />
      </Container>
    </>
  )
}

export default App
