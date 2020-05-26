import React, {Component} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
    this.logOut = this.logOut.bind(this)
  }

  componentWillMount(){
    const authToken = localStorage.getItem('authTokenUser')
    if (authToken){
      this.setState({
        isUserLogedIn: true
      })
    }
  }

  logOut () {
    localStorage.removeItem('autTokenUser')
    this.setState({
      isUserLogedIn: false
    })
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
              <Home LogOut={this.logOut} isUserLogedIn={isUserLogedIn} />
            </Route>
            <Route exact path="/post-content">
              <PostContent isUserLogedIn={isUserLogedIn} />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
 
}

