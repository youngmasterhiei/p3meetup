import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Auth from '../modules/Auth';

class HomePage extends React.Component {

  componentDidMount() {
    // update authenticated state on logout
    this.props.toggleAuthenticateStatus()
  }

  render() {
    return (
      <Card className="container">
        <CardTitle title="React Application" subtitle="This is the home page." />
          {Auth.isUserAuthenticated() ? (
            <h1 style={{ fontSize: '16px', color: 'green' }}>Welcome! You are logged in.</h1>
          ) : (
            <h1 style={{ fontSize: '16px', color: 'green' }}>You are not logged in.</h1>
          )}
      </Card>
    )
  }
};

export default HomePage;
