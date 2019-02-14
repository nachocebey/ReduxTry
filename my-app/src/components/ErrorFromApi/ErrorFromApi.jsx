import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import error from '../../services/error.png';


class ErrorFromApi extends Component {
  static propTypes = {
    message: PropTypes.string,
  };

  render() {
    if (this.props.message.length > 0) {
      return (
        <div align="center">
          <h6>{this.props.message}</h6>
          <img src={error} alt="Error" width="30" height="30" />
        </div>
      );
    }
    return (
      <div />
    );
  }
}

const mapStateToProps = state => ({
  message: state.pokeList.message,
});

export default connect(mapStateToProps)(ErrorFromApi);
