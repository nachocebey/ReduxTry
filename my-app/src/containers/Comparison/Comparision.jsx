import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import DetailsList from '../../components/DetailsList/DetailsList';


class Comparision extends Component {
  static propTypes = {
    params: PropTypes.object,
    match: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      pokeId1: this.props.match.params.pokeId1,
      pokeId2: this.props.match.params.pokeId2,
    };
  }

  render() {
    debugger;
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
