import React from 'react'

const GeneratedOutput = () => {
  const urlParams = new URLSearchParams(window.location.search)

  let fullname = urlParams.get('name')
  let email = urlParams.get('email')

  return (
    <div id="output">
      <h2>Your CV:</h2>
      <div className="generated-cv">
        <h2>Full name: {fullname}</h2>
        <p>Email Address: {email}</p>
      </div>
    </div>
  )
}

export default GeneratedOutput