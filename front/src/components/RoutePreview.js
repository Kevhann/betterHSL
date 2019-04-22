import React from "react"
import {
  formatDistance,
  formatTime,
  formatDuration
} from "../functions/formatter"
import { Icon, Grid } from "semantic-ui-react"

const RoutePreview = ({ route }) => {
  console.log("route:", route)
  const arrival = formatTime(route.legs[route.legs.length - 1].endTime)
  const departure = formatTime(route.legs[0].startTime)
  return (
    <>
      <span className="divided">
        <span>{departure}</span>
        {route.legs.map(leg => {
          let color = "red"
          let icon = "train"
          if (leg.mode === "WALK") {
            return <></>
          } else if (leg.mode === "SUBWAY") {
            color = "orange"
            icon = "subway"
          } else if (leg.mode === "BUS") {
            color = "blue"
            icon = "bus"
          }
          return (
            <>
              <span>
                <Icon name={icon} />
              </span>
              <span style={{ color }} className="divider" />
            </>
          )
        })}
        <span>{arrival}</span>
        <Icon name="angle down" className="expand_route" size="big" />
      </span>
      <div />
      {route.legs.map(leg => {
        if (leg.mode === "WALK") {
          return <></>
        }
        return <span className="vehicleNumber">{leg.trip.route.shortName}</span>
      })}
    </>
  )
}
export default RoutePreview
