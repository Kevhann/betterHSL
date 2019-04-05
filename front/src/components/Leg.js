import React from "react"

const Leg = ({ leg }) => {
  const startTime = new Date(leg.startTime)
  const hour = startTime.getHours()
  const minute = startTime.getMinutes()
  const formattedTime = hour + ":" + minute
  console.log("h", hour, "m", minute)

  return (
    <div>
      <p>
        <b>{leg.from.name}</b>
        <div>Mode: {leg.mode}</div>
        {leg.trip && (
          <div>
            {leg.trip.route.shortName} {leg.trip.tripHeadsign}
          </div>
        )}
        <div>Distance: {Math.floor(leg.distance)}m</div>
        <div>Departure: {formattedTime}</div>
        <div>To: {leg.to.name}</div>
      </p>
    </div>
  )
}
export default Leg
