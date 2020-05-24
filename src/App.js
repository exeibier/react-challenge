import React from 'react';
// External packages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Pages
import PostContent from './pages/PostContent'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Switch>
        <Route exact path="/post-content">
          <PostContent />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
