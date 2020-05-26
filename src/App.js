import React, { Component } from 'react';

import{
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css'
import Home from './pages/Home'
import PostContent from './pages/PostContent'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  render () {
    const { isUserLogedIn } = this.state
    
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/post-content">
              <PostContent />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}
