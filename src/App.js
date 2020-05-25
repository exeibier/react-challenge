import React, {Component} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';
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

  render(){
    const {isUserLogedIn} = this.state
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/login'>
              <LogIn/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
 
}

