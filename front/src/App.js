import React from 'react'
import { Container } from 'semantic-ui-react'
import SearchForm from './components/SearchForm'
import { Header } from 'semantic-ui-react'
import './styles.css'

const App = () => {
  return (
    <Container>
      <Header size="huge">Better HSL</Header>
      <SearchForm />
    </Container>
  )
}

export default App
