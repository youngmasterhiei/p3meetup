import React, { Component } from 'react';
import Home from "./components/pages/Home";
import About from "./components/pages/About";


import {BrowserRouter as Router,} from 'react-router-dom';
import Route from 'react-router-dom/Route';
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Route path="/home" exact render={
        ()=> {
          return (<Home />);
        }
      }/>

      <Route path="/" exact render={
        ()=> {
          return (<Home />);
        }
      }/>
      <Route path="/about" exact render={
        ()=> {
          return (<About />);
        }
      }/>
      <Route path="/events" render={
        ()=> {
          return (<Home />);
        }
      }/>
      <Route path="/Forum" render={
        ()=> {
          return (<Home />);
        }
      }/>
        

      </div>
      </Router>
    );
  }
}

export default App;
