import React, { useState } from 'react'
import { useApolloClient } from 'react-apollo-hooks'
import { gql } from 'apollo-boost'
import axios from 'axios'
import Routes from './Routes'
import AutocompleteSearchForm from './AutocompleteSearchForm'
import { Segment, Form, Button, Icon, Loader } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { setRoutes } from '../reducers/routeReducer'
import { setBackgroundLocation } from '../reducers/backgroundMapReducer'
import { setMapClass } from '../reducers/mapClassReducer'
import { setFormClass } from '../reducers/formClassReducer'

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
`

const SearchForm = ({
  setRoutes,
  setBackgroundLocation,
  setMapClass,
  classState,
  setClassState
}) => {
  const [from, setFrom] = useState('berliininkatu')
  const [to, setTo] = useState('hösmäri')
  const [loading, setLoading] = useState(false)

  const client = useApolloClient()
  const submit = async event => {
    event.preventDefault()
    setRoutes([])
    if (from !== '' && to !== '') {
      setLoading(true)
      setClassState('resultsForm')
      const routeFrom = await axios.get(
        `https://api.digitransit.fi/geocoding/v1/search?text=${from}&size=1`
      )

      const routeTo = await axios.get(
        `https://api.digitransit.fi/geocoding/v1/search?text=${to}&size=1`
      )

      const coordinatesFrom = routeFrom.data.features[0].geometry.coordinates
      const coordinatesTo = routeTo.data.features[0].geometry.coordinates

      setBackgroundLocation([coordinatesFrom[1], coordinatesFrom[0]])
      setMapClass('resultsMap')

      const plannedRoute = await client.query({
        query: planRoute,
        variables: {
          latFrom: coordinatesFrom[1],
          lonFrom: coordinatesFrom[0],
          latTo: coordinatesTo[1],
          lonTo: coordinatesTo[0]
        }
      })
      const newRoutes = plannedRoute.data.planRoute
      setLoading(false)
      setRoutes(newRoutes)
    }
  }

  return (
    <div className={classState}>
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
      <Loader inline="centered" active={loading} />
      <Routes />
    </div>
  )
}
const mapStateToProps = state => ({
  routes: state.routeReducer,
  classState: state.formClassReducer
})
const mapDispatchToProps = {
  setRoutes,
  setBackgroundLocation,
  setMapClass,
  setClassState: setFormClass
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm)
