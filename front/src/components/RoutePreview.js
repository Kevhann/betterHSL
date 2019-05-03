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
  let vehiclelegs = 0
  route.legs.forEach(leg => {
    if (leg.mode !== "WALK") vehiclelegs++
  })

  const maxwidth = 42 / vehiclelegs + "ch"

  return (
    <>
      <span className="routePreviewContainer">
        {route.legs.map(leg => {
          if (leg.mode === "WALK") {
            return <></>
          }
          return (
            <span
              className="routePreview"
              style={{ maxWidth: maxwidth }}
              key={leg.duration}
            >
              {leg.from.stop.name}
            </span>
          )
        })}
      </span>
      <div />
      <span className="divided">
        <span className="previewDeparture">{departure}</span>

        {route.legs.map(leg => {
          let color = "red"
          let icon = "train"
          if (leg.mode === "WALK" && route.legs.length !== 1) {
            return <></>
          } else if (leg.mode === "SUBWAY") {
            color = "orange"
            icon = "subway"
          } else if (leg.mode === "BUS") {
            color = "blue"
            icon = "bus"
          } else if (leg.mode === "WALK") {
            color = "lightblue"
            icon = "blind"
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
        <span className="previewArrival">{arrival}</span>
        <Icon name="angle down" className="expand_route" size="big" />
      </span>
      <div>
        <span className="routePreviewContainer">
          {route.legs.map(leg => {
            if (leg.mode === "WALK") {
              if (route.legs.length === 1) {
                return (
                  <span className="routePreview" style={{ maxWidth: maxwidth }}>
                    {formatDistance(route.walkDistance)}
                  </span>
                )
              }
              return <></>
            }
            return (
              <span className="routePreview" style={{ maxWidth: maxwidth }}>
                {leg.trip.route.shortName}
              </span>
            )
          })}
        </span>
      </div>
    </>
  )
}
export default RoutePreview
