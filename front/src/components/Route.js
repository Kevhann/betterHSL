import React, { useState } from 'react'
import Leg from './Leg'
import { Accordion, Icon } from 'semantic-ui-react'
import Timeline from 'react-timeline-semantic-ui'
import { Grid } from 'semantic-ui-react'
import { setActiveTrail } from '../reducers/trailReducer'
import { connect } from 'react-redux'
import RoutePreview from './RoutePreview'

const Route = ({ itinerary, activeTrail, setActiveTrail, itineraryid }) => {
  const [activeIndex, setActiveIndex] = useState(-1)

  const handleClick = (e, titleProps) => {
    const { index } = titleProps
    const newIndex = activeIndex === index ? -1 : index
    console.log('active trail:', activeTrail)
    console.log('route titleprops: ', titleProps)

    /* tää index/newindex ei ookkaan sitä mitä halutaan activeindexille, vaatii viel hinkkaamista
    Tää muuttaa sen active hommelin sillonki ku sulkee jonkun toisen jos on ollu monta auki */
    setActiveTrail(itineraryid)
    setActiveIndex(newIndex)
  }
  console.log('haloo')

  return (
    <p>
      <Accordion fluid styled>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={handleClick}
        >
          <span>
            <RoutePreview route={itinerary} />
          </span>
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
  setActiveTrail
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Route)
