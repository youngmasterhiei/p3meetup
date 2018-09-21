import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bootstrap from 'bootstrap-4-grid';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className = "row">
      <div className="col-md-6">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        </div>
        <div className="col-md-6">
        <h1>hellowrold</h1>
        </div>
        </div>
 
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
      </div>
    );
  }
}

export default App;
