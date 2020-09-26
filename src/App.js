import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';
import './App.css';

import InputForm from './Components/InputForm'
import GeneratedOutput from './Components/GeneratedOutput'

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

export default App;
