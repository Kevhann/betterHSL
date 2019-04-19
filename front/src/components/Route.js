import React, { useState } from "react"
import Leg from "./Leg"
import { Accordion, Icon } from "semantic-ui-react"
import formatDistance from "../functions/formatDistance"
import Timeline from "react-timeline-semantic-ui"
import { Grid } from "semantic-ui-react"
import { setActiveTrail } from "../reducers/trailReducer"
import { connect } from "react-redux"

const Route = ({ itinerary, activeTrail, setActiveTrail }) => {
  const [activeIndex, setActiveIndex] = useState(-1)
  const durationInSeconds = itinerary.duration
  const durationHours = Math.floor(durationInSeconds / 3600)
  const durationMinutes = Math.floor((durationInSeconds % 3600) / 60)
  const conditionalHours = durationHours === 0 ? "" : `${durationHours} h`
  const durationString = `${conditionalHours} ${durationMinutes} min`

  const walkDistance = formatDistance(itinerary.walkDistance)

  const handleClick = (e, titleProps) => {
    const { index } = titleProps
    const newIndex = activeIndex === index ? -1 : index
    console.log("active trail:", activeTrail)
    //tää index/newindex ei ookkaan sitä mitä halutaan activeindexille, vaatii viel hinkkaamista
    setActiveTrail(index)
    setActiveIndex(newIndex)
  }
  console.log("haloo")

  return (
    <p>
      <Accordion fluid styled>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={handleClick}
        >
          <Icon name="angle down" />
          <strong>Duration: {durationString} </strong>
          <strong>Walkdistance: {walkDistance}</strong>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <b>Route legs</b>
          <Grid>
            {itinerary.legs.map(leg => (
              <div>
                <p />
                <Leg leg={leg} />
              </div>
            ))}
          </Grid>
        </Accordion.Content>
      </Accordion>
    </p>
  )
}

const mapStateToProps = state => {
  return {
    activeTrail: state.trailReducer
  }
}

const mapDispatchToProps = {
  setActiveTrail: setActiveTrail
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Route)
