import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../modules/Auth';


class LogoutFunction extends React.Component {

  componentDidMount() {

  }

  render() {
    return (
      <div>
      <li><a href="#logout" id="" title="Sign In">Log Out</a></li>
      </div>
    )
  }
}

LogoutFunction.contextTypes = {
  router: PropTypes.object.isRequired
};

export default LogoutFunction;
