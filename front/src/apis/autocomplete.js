import axios from 'axios'

const autocomplete = async parameter => {
  if (parameter) {
    const autocompleteUrl =
      'http://api.digitransit.fi/geocoding/v1/autocomplete'
    const result = await axios.get(
      `${autocompleteUrl}?text=${parameter}&focus.point.lat=60.168656&focus.point.lon=24.940899`
    )
    console.log('result:', result)
    const autoCompletedObjects = result.data.features
    return autoCompletedObjects
  }
}

export default autocomplete
