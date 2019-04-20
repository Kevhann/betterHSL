import React from 'react'
import {
  formatDistance,
  formatTime,
  formatDuration
} from '../functions/formatter'
import { Icon } from 'semantic-ui-react'

const RoutePreview = ({ route }) => {
  console.log('route:', route)
  const departure = formatTime(route.legs[0].startTime)
  const arrival = formatTime(route.legs[route.legs.length - 1].endTime)
  return (
    <span className="divided">
      <Icon name="angle down" />
      {route.legs.map(leg => (
        <>
          <span>{formatTime(leg.startTime)}</span>
          {leg.mode === 'WALK' && <span>{leg.mode} </span>}
          {leg.mode !== 'WALK' && (
            <span>
              {leg.mode} {leg.trip.route.shortName}
            </span>
          )}
          <span className="divider" />
        </>
      ))}
      <span>{arrival}</span>
    </span>
  )
}
export default RoutePreview

/*
      <strong>{formatDuration(route.duration)} </strong>

*/
