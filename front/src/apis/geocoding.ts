import axios from 'axios';
import { AutocompleteValue } from '../components/AutocompleteSearchForm';
import { LatLong } from '../types/route';
type GeocodingResponse = { features: { geometry: { coordinates: LatLong } }[] };
export const geocode = async (
  from: AutocompleteValue,
  to: AutocompleteValue
): Promise<[LatLong, LatLong]> => {
  const fromCoordinates =
    from.coordinates ??
    (
      await axios.get<GeocodingResponse>(
        `https://api.digitransit.fi/geocoding/v1/search?text=${from.name}&size=1`
      )
    ).data.features[0].geometry.coordinates;

  const toCoordinates =
    to.coordinates ??
    (
      await axios.get<GeocodingResponse>(
        `https://api.digitransit.fi/geocoding/v1/search?text=${to.name}&size=1`
      )
    ).data.features[0].geometry.coordinates;

  return [fromCoordinates, toCoordinates];
};
