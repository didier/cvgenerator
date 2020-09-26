import React, { useEffect, useState } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <InputForm />
        </Route>
        <Route path="/output">
          <GeneratedOutput />
        </Route>
      </Switch>
    </Router>
  );
}

function InputForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (event) => {
    window.location.href = "/output"
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit} id="input-form">
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
    </div>
  )
}

function GeneratedOutput() {
  return (
    <div id="output">
      <h2>Your CV:</h2>
      <div className="generated-cv">
      </div>
    </div>
  )
}

export default App;
