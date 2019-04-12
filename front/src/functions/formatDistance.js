const formatDistance = distance => {
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
export default formatDistance
