import React, { useState } from "react"
import _ from "lodash"
import { Search, Grid, Header, Segment } from "semantic-ui-react"
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
    const formattedResults = autocompleteResults.map(res => ({
      title: res.properties.name
    }))
    setLoading(false)
    setResults(_.take(formattedResults, 5))
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
  return (
    <Search
      width={12}
      loading={loading}
      onResultSelect={handleResultSelect}
      onSearchChange={handleSearchChange}
      results={results}
      value={inputValue}
      placeholder={fieldName}
    />
  )
}

export default AutocompleteForm
