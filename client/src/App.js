import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignUpForm from "./components/login/SignUpForm";
import DropDown from "./components/features/DropDown";
import DisplayEvents from "./components/event/DisplayEvents";
import 'bootstrap-4-grid';


// import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
        <div className="row">
          <div className="col-md-8">
            
          </div>
          <div className="col-md-4">
            <SignUpForm />
          </div>
        </div>
        <div className="row">
        <DropDown />
        </div>
        <div className="row">
        <DisplayEvents />
        </div>

      </div>
    );
  }
}

export default App;
