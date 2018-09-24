import React, { Component } from 'react';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Profile from "./components/pages/Profile";
import Forum from "./components/pages/Forum";

import {BrowserRouter as Router,} from 'react-router-dom';
import Route from 'react-router-dom/Route';
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Route path="/" exact render={
        ()=> {
          return (<Home />);
        }
      }/>
      <Route path="/home" exact render={
        ()=> {
          return (<Home />);
        }
      }/>
      <Route path="/about" exact render={
        ()=> {
          return (<About />);
        }
      }/>
      <Route path="/profile" render={
        ()=> {
          return (<Profile />);
        }
      }/>
      <Route path="/forum" render={
        ()=> {
          return (<Forum />);
        }
      }/>
        

      </div>
      </Router>
    );
  }
}

export default App;
