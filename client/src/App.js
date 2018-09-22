import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignUpForm from "./components/login/SignUpForm";

import Bootstrap from 'bootstrap-4-grid';
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
      <div className = "row">
      <div className="col-md-6">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"></h1>
        </header>
        </div>
        <div className="col-md-6">
        <SignUpForm />
        </div>
        </div>
 
        
      </div>
    );
  }
}

export default App;
