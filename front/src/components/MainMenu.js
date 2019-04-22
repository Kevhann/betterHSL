import React from "react"
import { Menu, Header } from "semantic-ui-react"
import { setMapClass } from "../reducers/mapClassReducer"
import { setFormClass } from "../reducers/formClassReducer"
import { setRoutes } from "../reducers/routeReducer"
import { connect } from "react-redux"

const MainMenu = ({ setMapClass, setFormClass, setRoutes }) => {
  return (
    <>
      <Menu className="menu" inverted color="blue" borderless>
        <Menu.Item
          name="BetterHsl"
          active={false}
          onClick={() => {
            setFormClass("startForm")
            setMapClass("startMap")
            setRoutes([])
          }}
        >
          <Header>BetterHsl</Header>
        </Menu.Item>
      </Menu>
    </>
  )
}

const mapDispatchToProps = {
  setMapClass,
  setFormClass,
  setRoutes
}

export default connect(
  null,
  mapDispatchToProps
)(MainMenu)
