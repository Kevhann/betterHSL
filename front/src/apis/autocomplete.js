import axios from 'axios'
import _ from 'lodash'

const autocomplete = async parameter => {
  let result = []

  const resultFilterer = search => {
    const formattedResults = search.data.features.map(res => ({
      title: res.properties.label,
      layer: res.properties.layer
    }))
    result = result.concat(formattedResults)
  }

  if (parameter) {
    const searchUrl = 'http://api.digitransit.fi/geocoding/v1/search'
    const autocompleteUrl =
      'http://api.digitransit.fi/geocoding/v1/autocomplete'

    const geobox =
      'boundary.polygon=25.5345%2060.2592%2C25.3881%2060.1693%2C25.3559%2060.102%2C25.3293%2059.9371%2C24.2831%2059.78402%2C24.2721%2059.95501%2C24.2899%2060.00895%2C24.3087%2060.01947%2C24.1994%2060.12753%2C24.1362%2060.1114%2C24.1305%2060.12847%2C24.099%2060.1405%2C24.0179%2060.1512%2C24.0049%2060.1901%2C24.0445%2060.1918%2C24.0373%2060.2036%2C24.0796%2060.2298%2C24.1652%2060.2428%2C24.3095%2060.2965%2C24.3455%2060.2488%2C24.428%2060.3002%2C24.5015%2060.2872%2C24.4888%2060.3306%2C24.5625%2060.3142%2C24.5957%2060.3242%2C24.6264%2060.3597%2C24.666%2060.3638%2C24.7436%2060.3441%2C24.9291%2060.4523%2C24.974%2060.5253%2C24.9355%2060.5131%2C24.8971%2060.562%2C25.0388%2060.5806%2C25.1508%2060.5167%2C25.1312%2060.4938%2C25.0385%2060.512%2C25.057%2060.4897%2C25.0612%2060.4485%2C25.1221%2060.4474%2C25.1188%2060.4583%2C25.149%2060.4621%2C25.1693%2060.5062%2C25.2242%2060.5016%2C25.3661%2060.4118%2C25.3652%2060.3756%2C25.5345%2060.2592&size=4'

    const venues = await axios.get(
      `${searchUrl}?text=${parameter}&focus.point.lat=60.168656&focus.point.lon=24.940899&layers=venue&${geobox}`
    )
    resultFilterer(venues)

    const streets = await axios.get(
      `${searchUrl}?text=${parameter}&focus.point.lat=60.168656&focus.point.lon=24.940899&layers=street&${geobox}`
    )

    resultFilterer(streets)

    const addresses = await axios.get(
      `${searchUrl}?text=${parameter}&focus.point.lat=60.168656&focus.point.lon=24.940899&layers=address&${geobox}`
    )

    resultFilterer(addresses)

    const stops = await axios.get(
      `${autocompleteUrl}?text=${parameter}&focus.point.lat=60.168656&focus.point.lon=24.940899&layers=stop&${geobox}`
    )
    console.log('stops:', stops)

    resultFilterer(stops)

    return _.take(result, 16)
  }
}

export default autocomplete
