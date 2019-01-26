import React, { Component, Fragment } from 'react';
import { Header } from '../../components/Header/Header';
import { DetailsList } from '../../components/DetailsList/DetailsList';
import PropTypes from 'prop-types';

class Comparision extends Component {
  static propTypes = {
    params: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      pokeId1: props.match.params.pokeId1,
      pokeId2: props.match.params.pokeId2
    };
  }

  render() {
    return (
      <div>
        <Fragment>
          <Header />
          <DetailsList pokeId={this.state.pokeId1} />
          <div>VS</div>
          <DetailsList pokeId={this.state.pokeId2} />
        </Fragment>
      </div>
    );
  }
}

export default Comparision;
