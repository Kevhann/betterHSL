import React, { useState } from 'react'
import _ from 'lodash'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'
import autocomplete from '../apis/autocomplete'

const AutocompleteForm = ({ fieldName }) => {
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState([])
  const [inputValue, setInputValue] = useState('')

  const resetComponent = () => {
    setLoading(false)
    setResults([])
    setInputValue('')
  }

  const handleResultSelect = (e, { result }) => setInputValue(result.title)

  const handleSearchChange = (e, { value }) => {
    setLoading(true)
    setInputValue(value)

    setTimeout(async () => {
      if (value.length < 1) return resetComponent()

      const autocompleteResults = await autocomplete(value)
      console.log('autocompleteResults:', autocompleteResults)
      const formattedResults = autocompleteResults.map(res => ({
        title: res.properties.name
      }))
      setLoading(false)
      setResults(_.take(formattedResults, 5))
    }, 800)
  }
  return (
    <Grid>
      <Grid.Column width={6}>
        <Search
          loading={loading}
          onResultSelect={handleResultSelect}
          onSearchChange={_.debounce(handleSearchChange, 500, {
            leading: true
          })}
          results={results}
          value={inputValue}
          placeholder={fieldName}
        />
      </Grid.Column>
      <Grid.Column width={10}>
        <Segment>
          <Header>State</Header>
          <pre style={{ overflowX: 'auto' }}>
            {JSON.stringify({ results, loading, inputValue }, null, 2)}
          </pre>
          <Header>Options</Header>
          <pre style={{ overflowX: 'auto' }}>
            {JSON.stringify(results, null, 2)}
          </pre>
        </Segment>
      </Grid.Column>
    </Grid>
  )
}

export default AutocompleteForm
