import React, { useState, useEffect } from "react"
import { useApolloClient } from "react-apollo-hooks"
import Routes from "./Routes"
import AutocompleteSearchForm from "./AutocompleteSearchForm"
import {
  Segment,
  Form,
  Button,
  Icon,
  Loader,
  Dropdown,
  Input
} from "semantic-ui-react"
import { connect } from "react-redux"
import { setRoutes } from "../reducers/routeReducer"
import { setBackgroundLocation } from "../reducers/backgroundMapReducer"
import { setMapClass } from "../reducers/mapClassReducer"
import { setFormClass } from "../reducers/formClassReducer"
import { formatTime, getCurrentDate } from "../functions/formatter"
import planRoute from "../apis/planRoute"
import geocoding from "../apis/geocoding"

const SearchForm = ({
  setRoutes,
  setBackgroundLocation,
  setMapClass,
  classState,
  setClassState
}) => {
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  const [loading, setLoading] = useState(false)
  const [planTime, setPlanTime] = useState("")
  const [planDate, setPlanDate] = useState("")
  const [arriveBy, setArriveBy] = useState(false)

  const client = useApolloClient()
  useEffect(() => {
    setPlanTime(formatTime(Date.now()))
    setPlanDate(getCurrentDate())
  }, [])
  const submit = async event => {
    event.preventDefault()
    setRoutes([])
    if (from !== "" && to !== "") {
      setLoading(true)
      setClassState("resultsForm")

      const coordinatesFrom = await geocoding(from)
      const coordinatesTo = await geocoding(to)

      setBackgroundLocation([coordinatesFrom[1], coordinatesFrom[0]])
      setMapClass("resultsMap")

      const plannedRoute = await client.query({
        query: planRoute,
        variables: {
          latFrom: coordinatesFrom[1],
          lonFrom: coordinatesFrom[0],
          latTo: coordinatesTo[1],
          lonTo: coordinatesTo[0],
          time: `${planTime}:00`,
          date: planDate,
          arriveBy
        }
      })
      const newRoutes = plannedRoute.data.planRoute
      setLoading(false)
      setRoutes(newRoutes)
    }
  }

  return (
    <div className={classState}>
      <Segment raised style={{ marginBottom: 0 }}>
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
            <div className="toggleSearchTime">
              <Button animated type="submit">
                <Button.Content visible>Search</Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow right" />
                </Button.Content>
              </Button>
              <span>
                <Dropdown
                  style={{
                    minWidth: "11ch",
                    paddingLeft: "10px",
                    paddingRight: "10px"
                  }}
                  defaultValue={false}
                  selection
                  fluid
                  options={[
                    { key: 1, value: false, text: "leave at" },
                    { key: 2, value: true, text: "arrive by" }
                  ]}
                  onChange={(event, { value }) => {
                    setArriveBy(value)
                  }}
                />
              </span>
              <span>
                <Input
                  className="timeInput"
                  defaultValue={planTime}
                  type="time"
                  onChange={event => setPlanTime(event.target.value)}
                />
              </span>
              <span>
                <Input
                  type="date"
                  style={{ maxWidth: "163px" }}
                  value={planDate}
                  onChange={event => setPlanDate(event.target.value)}
                />
              </span>
            </div>
          </Form.Field>
        </Form>
      </Segment>
      <Routes />
      <Loader
        inline="centered"
        active={loading}
        style={{ marginTop: "10px" }}
      />
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
