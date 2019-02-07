import React, { Component } from 'react';
import PropTypes from 'prop-types';
import error from '../../services/error.png';

class ErrorFromApi extends Component {
  static propTypes = {
    message: PropTypes.string,
  };

  render() {
    return (
      <div>
        <h6>{this.props.message}</h6>
        <img src={error} alt="Error" width="30" height="30" />
      </div>
    );
  }
}

export default ErrorFromApi;
