import React from 'react'
import { Menu, Header } from 'semantic-ui-react'
import SearchForm from './components/SearchForm'
import BackgroundMap from './components/BackgroundMap'
import './styles.css'

const App = () => {
  return (
    <>
      <Menu className="menu" inverted color="blue" borderless>
        <Menu.Item
          name="BetterHsl"
          active={false}
          onClick={() => console.log('clicked menu')}
        >
          <Header>BetterHsl</Header>
        </Menu.Item>
      </Menu>
      <BackgroundMap />
      <SearchForm />
    </>
  )
}

export default App
