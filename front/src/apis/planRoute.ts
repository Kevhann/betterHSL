import { gql } from 'apollo-boost';

export const planRoute = gql`
  query planRoute(
    $latFrom: Float
    $lonFrom: Float
    $latTo: Float
    $lonTo: Float
    $time: String
    $date: String
    $arriveBy: Boolean
  ) {
    planRoute(
      latFrom: $latFrom
      lonFrom: $lonFrom
      latTo: $latTo
      lonTo: $lonTo
      time: $time
      date: $date
      arriveBy: $arriveBy
    ) {
      walkDistance
      duration
      legs {
        legGeometry {
          points
        }
        mode
        startTime
        endTime
        trip {
          route {
            shortName
            longName
          }
          tripHeadsign
          stops {
            name
          }
        }
        from {
          lat
          lon
          name
          stop {
            code
            name
          }
        }
        to {
          lat
          lon
          name
        }
        distance
      }
    }
  }
`;
