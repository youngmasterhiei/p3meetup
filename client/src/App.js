import React, { Component } from 'react';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Profile from "./components/pages/Profile";
import Forum from "./components/pages/forum/Forum";
import ForumEvents from "./components/pages/forum/Forum";
import DashboardPage from "./components/pages/DashboardPage";
import Auth from './components/modules/Auth';
import Event from "./components/pages/Event";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import SignUpForm from './components/login/SignUpForm';


const LoggedOutRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.isUserAuthenticated() ? (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    ) : (
      <Component {...props} {...rest} />
    )
  )}/>
)
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.isUserAuthenticated() ? (
      <Component {...props} {...rest} />
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
)
const PropsRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <Component {...props} {...rest} />
  )}/>
)


class App extends Component {


  
    constructor(props) {
      super(props);
      this.state = {
        authenticated: false
      }
    };
  
    componentDidMount() {
      // check if user is logged in on refresh
      this.toggleAuthenticateStatus()
    }
  
    toggleAuthenticateStatus() {
      // check authenticated status and toggle state based on that
      this.setState({ authenticated: Auth.isUserAuthenticated() })
    }


  render() {
    return (
      <Router>
      <div className="App">
      <Route path="/" exact render={
        ()=> {
          return (<Home />);
        }
      }/>
      <PropsRoute exact path="/home" component={Home} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />

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

      <Route path="/event" exact render={
        ()=> {
          return (<Event />);
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
      <LoggedOutRoute path="/signup" component={SignUpForm}/>
      <PrivateRoute path="/signup" component={DashboardPage}/>


      </div>
      </Router>
    );
  }
}

export default App;
