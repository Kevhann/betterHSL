import React from 'react'
import { formatDistance, formatTime } from '../functions/formatter'

const Leg = ({ leg }) => {
  const startTime = formatTime(leg.startTime)
  const distance = formatDistance(leg.distance)

  return (
    <div>
      <p />
      <div>
        <b>{leg.from.name}</b>
        <div>Mode: {leg.mode}</div>
        {leg.trip && (
          <div>
            {leg.trip.route.shortName} {leg.trip.tripHeadsign}
          </div>
        )}
        <div>Distance: {distance}</div>
        <div>Departure: {startTime}</div>
        <div>To: {leg.to.name}</div>
      </div>
    </div>
  )
}
export default Leg
