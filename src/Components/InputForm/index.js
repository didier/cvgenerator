import React from 'react'

const InputForm = () => {
  return (
    <form action="/output" id="input-form">
      <h2>Enter details to generate your CV.</h2>
      <label htmlFor="name">
        Full name:
           <input type="text" name="name" />
      </label>
      <label htmlFor="email">
        Email address:
           <input type="text" name="email" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default InputForm