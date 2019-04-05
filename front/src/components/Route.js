import React from 'react'
import Leg from './Leg'

const Route = ({ itinerary }) => {
  return (
    <div>
      <p>
        <div>
          <strong>Walkdistance: {itinerary.walkDistance}</strong>
        </div>
        <div>
          <strong>Duration: {itinerary.duration}</strong>
        </div>
      </p>

      <div>
        <b>Route legs</b>
      </div>
      {itinerary.legs.map(leg => (
        <div>
          <p />
          <Leg leg={leg} />
        </div>
      ))}
    </div>
  )
}

export default Route
