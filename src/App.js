import React, { useState } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/output">
            <GeneratedOutput />
          </Route>
          <Route path="/">
            <InputForm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function InputForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (event) => {
    window.location.href = "/output"
  }

  return (
    <form action="/output" id="input-form">
      <h2>Enter details to generate your CV.</h2>
      <label htmlFor="name">
        Full name:
           <input type="text" name="name" onChange={(event) => setName(event.target.name)} />
      </label>
      <label htmlFor="email">
        Email address:
           <input type="text" name="email" onChange={(event) => setEmail(event.target.email)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

function GeneratedOutput() {
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

export default App;
