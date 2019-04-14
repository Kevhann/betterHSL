import React, { useState } from "react"
import _ from "lodash"
import { Search, Grid, Header, Segment, Label, Icon } from "semantic-ui-react"
import autocomplete from "../apis/autocomplete"

const AutocompleteForm = ({ fieldName, inputValue, setInputValue }) => {
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState([])

  const resetComponent = () => {
    setLoading(false)
    setResults([])
    setInputValue("")
  }

  const handleResultSelect = (e, { result }) => setInputValue(result.title)

  const update = async value => {
    if (value.length < 1) return resetComponent()

    const autocompleteResults = await autocomplete(value)
    console.log("autocompleteResults:", autocompleteResults)

    setLoading(false)
    setResults(autocompleteResults)
  }

  const bouncer = _.debounce(update, 2000, {
    trailing: true
  })

  const handleSearchChange = (e, { value }) => {
    setLoading(true)
    console.log("inputvalue: ", inputValue)
    setInputValue(value)
    bouncer(value)
  }
  const resultRenderer = ({ title, layer }) => {
    /* Return an appropriate icon based on the layer of the autofill result */
    let iconName
    if (layer === "venue") {
      iconName = "building"
    } else if (layer === "stop") {
      iconName = "flag"
    } else if (layer === "address") {
      iconName = "point"
    } else {
      iconName = "map signs"
    }
    return (
      <div>
        <Icon name={iconName} />
        {title}
      </div>
    )
  }
  return (
    <Search
      fluid
      loading={loading}
      onResultSelect={handleResultSelect}
      onSearchChange={handleSearchChange}
      results={results}
      value={inputValue}
      placeholder={fieldName}
      resultRenderer={resultRenderer}
    />
  )
}

export default AutocompleteForm
