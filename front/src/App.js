import React from "react"
import { Container, Menu } from "semantic-ui-react"
import SearchForm from "./components/SearchForm"
import BackgroundMap from "./components/BackgroundMap"
import "./styles.css"

const App = () => {
  return (
    <>
      <BackgroundMap />
      <Container>
        <Menu widths={3} className="menu">
          <Menu.Item header name="BetterHsl" active={false} />
        </Menu>
        <SearchForm />
      </Container>
    </>
  )
}

export default App
