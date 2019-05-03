import React, { useState } from "react"
import Leg from "./Leg"
import { Accordion } from "semantic-ui-react"
import { setActiveTrail } from "../reducers/trailReducer"
import { connect } from "react-redux"
import RoutePreview from "./RoutePreview"
import { Timeline, Event } from "./Timeline"
import { formatDistance, formatTime } from "../functions/formatter"

const Routes = ({ setActiveTrail, routes }) => {
  const [activeIndex, setActiveIndex] = useState(-1)
  let itineraryid = -1

  const handleClick = (e, titleProps) => {
    const { index } = titleProps
    const isActive = activeIndex === index ? -1 : index
    if (isActive >= 0) {
      setActiveTrail(isActive)
    }
    setActiveIndex(isActive)
  }

  if (routes.length === 0) return <></>

  return (
    <>
      <Accordion fluid styled>
        {routes.map(route => {
          itineraryid++
          return (
            <>
              <Accordion.Title
                onClick={handleClick}
                index={itineraryid}
                active={activeIndex === itineraryid}
              >
                <span key={route.distance}>
                  <RoutePreview route={route} />
                </span>
              </Accordion.Title>
              <Accordion.Content active={activeIndex === itineraryid}>
                <Timeline>
                  {route.legs.map(leg => (
                    <div key={leg.distance}>
                      <p />
                      <Leg leg={leg} />
                    </div>
                  ))}
                </Timeline>
              </Accordion.Content>
            </>
          )
        })}
      </Accordion>
    </>
  )
}

const mapStateToProps = state => {
  return {
    routes: state.routeReducer
  }
}

const mapDispatchToProps = {
  setActiveTrail
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes)
