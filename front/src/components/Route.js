import React, { useState } from 'react'
import Leg from './Leg'
import { Accordion, Icon } from 'semantic-ui-react'
import formatDistance from '../functions/formatDistance'

const Route = ({ itinerary }) => {
  const [activeIndex, setActiveIndex] = useState(-1)
  const durationInSeconds = itinerary.duration
  const durationHours = Math.floor(durationInSeconds / 3600)
  const durationMinutes = Math.floor((durationInSeconds % 3600) / 60)
  const conditionalHours = durationHours === 0 ? '' : `${durationHours} h`
  const durationString = `${conditionalHours} ${durationMinutes} min`

  const walkDistance = formatDistance(itinerary.walkDistance)

  const handleClick = (e, titleProps) => {
    const { index } = titleProps
    const newIndex = activeIndex === index ? -1 : index

    setActiveIndex(newIndex)
  }

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
          {itinerary.legs.map(leg => (
            <div>
              <p />
              <Leg leg={leg} />
            </div>
          ))}
        </Accordion.Content>
      </Accordion>
    </p>
  )
}

export default Route
