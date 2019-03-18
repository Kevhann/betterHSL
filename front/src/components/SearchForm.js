import React, { useState } from "react"

const SearchForm = () => {
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  console.log("from: ", from)
  console.log("to: ", to)

  const submit = event => {
    event.preventDefault()
    console.log("submitted")
    setFrom("")
    setTo("")
  }

  return (
    <form onSubmit={submit}>
      <div>
        From: <input value={from} onChange={e => setFrom(e.target.value)} />
      </div>
      <div>
        To: <input value={to} onChange={e => setTo(e.target.value)} />
      </div>
      <div>
        <button type="submit">click me</button>
      </div>
    </form>
  )
}

export default SearchForm
