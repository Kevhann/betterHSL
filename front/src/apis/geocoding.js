import axios from "axios"

const geocode = async value => {
  const result = await axios.get(
    `https://api.digitransit.fi/geocoding/v1/search?text=${value}&size=1`
  )
  const coordinates = result.data.features[0].geometry.coordinates
  return coordinates
}

export default geocode
