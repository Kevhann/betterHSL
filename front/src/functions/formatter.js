export const formatDistance = distance => {
  const floorDistance = Math.round(distance)
  let result
  if (floorDistance > 1000) {
    const distanceRemainder = Math.round((floorDistance % 1000) / 100)
    const distanceKm = Math.floor(floorDistance / 1000)
    result = `${distanceKm}.${distanceRemainder}km`
  } else {
    result = `${floorDistance}m`
  }
  return result
}

export const formatDuration = duration => {
  const durationInSeconds = duration
  const durationHours = Math.floor(durationInSeconds / 3600)
  const durationMinutes = Math.floor((durationInSeconds % 3600) / 60)
  const conditionalHours = durationHours === 0 ? '' : `${durationHours} h`
  return `${conditionalHours} ${durationMinutes} min`
}

export const formatTime = time => {
  const date = new Date(time)
  const hour = date.getHours()
  const minute = date.getMinutes()
  return `${hour}:${minute}`
}
