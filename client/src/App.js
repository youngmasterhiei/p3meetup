import React, { Component } from 'react';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Profile from "./components/pages/Profile";
import Forum from "./components/pages/forum/Forum";
import ForumEvents from "./components/pages/forum/Forum";

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
      <Route path="/profile" exact render={
        ()=> {
          return (<Profile />);
        }
      }/>
      <Route path="/forum" exact render={
        ()=> {
          return (<Forum />);
        }
      }/>
       <Route path="/forum/events" exact render={
        ()=> {
          return (<ForumEvents />);
        }
      }/>
        

      </div>
      </Router>
    );
  }
}

export default App;
