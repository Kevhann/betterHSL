import React from "react"
import MainMenu from "./components/MainMenu"
import SearchForm from "./components/SearchForm"
import BackgroundMap from "./components/BackgroundMap"
import "./styles.css"

const App = () => {
  return (
    <>
      <MainMenu />
      <BackgroundMap />
      <SearchForm />
    </>
  )
}

export default App
