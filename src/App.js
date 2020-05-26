import React, {Component} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import PostContent from './pages/PostContent'

//Pages
import LogIn from './pages/LogIn'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state= {
      isUserLogedIn: false
    }
  }

  componentWillMount(){
    const authToken = localStorage.getItem('authTokenUser')
    if (authToken){
      this.setState({
        isUserLogedIn: true
      })
    }
  }

  render () {
    const { isUserLogedIn } = this.state
    
    return (
      <Router>
        <div className="App">
          <Switch>
          <Route exact path="/">
              <LogIn />
            </Route>
            <Route exact path="/posts">
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

