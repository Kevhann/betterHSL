import React, { useState } from "react"
import _ from "lodash"
import { Search, Icon } from "semantic-ui-react"
import autocomplete from "../apis/autocomplete"
import useDebouncedCallback from "use-debounce/lib/callback"

const AutocompleteForm = ({ fieldName, inputValue, setInputValue }) => {
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState([])
  const [bounce] = useDebouncedCallback(
    async value => {
      if (value.length < 1) return resetComponent()

      const autocompleteResults = await autocomplete(value)
      console.log("autocompleteResults:", autocompleteResults)

      setLoading(false)
      setResults(autocompleteResults)
    },
    200,
    []
  )

  const resetComponent = () => {
    setLoading(false)
    setResults([])
    setInputValue("")
  }

  const handleResultSelect = (e, { result }) => setInputValue(result.title)

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
      onSearchChange={e => {
        setLoading(true)
        setInputValue(e.target.value)
        bounce(e.target.value)
      }}
      onResultSelect={handleResultSelect}
      results={results}
      value={inputValue}
      placeholder={fieldName}
      resultRenderer={resultRenderer}
    />
  )
}

export default AutocompleteForm
