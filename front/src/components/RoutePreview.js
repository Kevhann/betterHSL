import React from 'react'
import {
  formatDistance,
  formatTime,
  formatDuration
} from '../functions/formatter'
import { Icon, Grid } from 'semantic-ui-react'

const RoutePreview = ({ route }) => {
  console.log('route:', route)
  const arrival = formatTime(route.legs[route.legs.length - 1].endTime)
  return (
    <span className="divided">
      <Icon name="angle down" />
      {route.legs.map(leg => {
        let color = 'red'
        if (leg.mode === 'WALK') {
          color = 'green'
        } else if (leg.mode === 'SUBWAY') {
          color = 'orange'
        } else if (leg.mode === 'BUS') {
          color = 'blue'
        }
        return (
          <>
            <span>{formatTime(leg.startTime)}</span>

            {leg.mode === 'WALK' && <span>{leg.mode} </span>}
            {leg.mode !== 'WALK' && (
              <span>
                {leg.mode} {leg.trip.route.shortName}
              </span>
            )}
            <span style={{ color }} className="divider" />
          </>
        )
      })}
      <span>{arrival}</span>
    </span>
  )
}
export default RoutePreview
