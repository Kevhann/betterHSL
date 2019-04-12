import React, { useState } from 'react'
import { useApolloClient } from 'react-apollo-hooks'
import { gql } from 'apollo-boost'
import axios from 'axios'
import Route from './Route'
import AutocompleteSearchForm from './AutocompleteSearchForm'
import {
  Search,
  Grid,
  Header,
  Segment,
  Form,
  Button,
  Icon
} from 'semantic-ui-react'

const planRoute = gql`
  query planRoute(
    $latFrom: Float
    $lonFrom: Float
    $latTo: Float
    $lonTo: Float
  ) {
    planRoute(
      latFrom: $latFrom
      lonFrom: $lonFrom
      latTo: $latTo
      lonTo: $lonTo
    ) {
      walkDistance
      duration
      legs {
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
`

const SearchForm = () => {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [routes, setRoutes] = useState([])
  console.log('from: ', from)
  console.log('to: ', to)
  const client = useApolloClient()

  const submit = async event => {
    event.preventDefault()
    console.log('routes:', routes)
    setRoutes([])
    if (from !== '' && to !== '') {
      const routeFrom = await axios.get(
        `https://api.digitransit.fi/geocoding/v1/search?text=${from}&size=1`
      )

      const routeTo = await axios.get(
        `https://api.digitransit.fi/geocoding/v1/search?text=${to}&size=1`
      )

      const coordinatesFrom = routeFrom.data.features[0].geometry.coordinates
      const coordinatesTo = routeTo.data.features[0].geometry.coordinates

      const plannedRoute = await client.query({
        query: planRoute,
        variables: {
          latFrom: coordinatesFrom[1],
          lonFrom: coordinatesFrom[0],
          latTo: coordinatesTo[1],
          lonTo: coordinatesTo[0]
        }
      })
      console.log(
        'planned route search formissa: ',
        plannedRoute.data.planRoute
      )
      const newRoutes = plannedRoute.data.planRoute
      setRoutes(newRoutes)
    }

    setFrom('')
    setTo('')
  }

  return (
    <div>
      <Segment>
        <Form onSubmit={submit}>
          <Form.Field>
            <AutocompleteSearchForm
              inputValue={from}
              setInputValue={setFrom}
              fieldName="from"
            />
          </Form.Field>
          <Form.Field>
            <AutocompleteSearchForm
              inputValue={to}
              setInputValue={setTo}
              fieldName="to"
            />
          </Form.Field>
          <Form.Field>
            <Button animated type="submit">
              <Button.Content visible>Search</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
          </Form.Field>
        </Form>
      </Segment>
      <div>
        {routes.map(route => (
          <p key={route.duration}>
            <Route itinerary={route} />
          </p>
        ))}
      </div>
    </div>
  )
}

export default SearchForm
