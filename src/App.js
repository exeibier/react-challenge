import React, { Component } from "react";
// External Packages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css'
import Home from './pages/Home'

import "./App.css";


export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            
          </Switch>
        </div>
      </Router>

    );
  }
}

