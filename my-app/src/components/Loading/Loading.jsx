import React, { Component } from 'react';
import pikaLoading from '../../services/pikaLoading.gif';

class Loading extends Component {
  render() {
    return (
      <div align="center">
        <img src={pikaLoading} alt="PikaLoading" width="80" height="60" />
        <h4>Loading...</h4>
      </div>
    );
  }
}

export default Loading;
