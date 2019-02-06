import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DetailsList extends Component {
  static propTypes = {
    message: PropTypes.string,
  };


  render() {
    return (
      <div>
        <h4>{this.props.message}</h4>
      </div>
    );
  }
}

export default DetailsList;
