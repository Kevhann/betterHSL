import React from 'react'
import Leg from './Leg'

const Route = ({ itinerary }) => {
  const durationInSeconds = itinerary.duration
  const durationHours = Math.floor(durationInSeconds / 3600)
  const durationMinutes = Math.floor((durationInSeconds % 3600) / 60)
  const conditionalHours = durationHours === 0 ? '' : `${durationHours} h`
  const durationString = `${conditionalHours} ${durationMinutes} min`

  let walkDistance = Math.round(itinerary.walkDistance)
  if (walkDistance > 1000) {
    const walkDistanceRemainder = Math.round((walkDistance % 1000) / 100)
    const walkDistanceKm = Math.floor(walkDistance / 1000)
    walkDistance = `${walkDistanceKm}.${walkDistanceRemainder}Km`
  } else {
    walkDistance = `${walkDistance}m`
  }

  return (
    <div>
      <p>
        <div>
          <strong>Walkdistance: {walkDistance}</strong>
        </div>
        <div>
          <strong>Duration: {durationString}</strong>
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
