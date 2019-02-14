import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import pikaLoading from '../../services/pikaLoading.gif';
import { setLoadingState } from '../../actions/pokeList';

class Loading extends Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    setLoadingState: PropTypes.func,
  };

  componentWillUnmount= () => {
    //this.props.setLoadingState(false);
  }

  render() {
    debugger;
    if (this.props.isLoading) {
      return (
        <div align="center">
          <img src={pikaLoading} alt="PikaLoading" width="80" height="60" />
          <h4>Loading...</h4>
        </div>
      );
    }

    return (
      <div />
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.pokeList.loadingState,
});

export default connect(mapStateToProps, setLoadingState)(Loading);
