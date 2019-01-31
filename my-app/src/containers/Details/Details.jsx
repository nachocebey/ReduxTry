import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import DetailsList from '../../components/DetailsList/DetailsList';

class Details extends Component {
  static propTypes = {
    params: PropTypes.object,
    pokeId: PropTypes.number,
    match: PropTypes.object,
  };

  // constructor(props) {
  //   super(props);
  //   pokeId = this.props.match.params.pokeId,
  // }

  render() {
    const { pokeId } = this.props.match.params;
    return (
      <div>
        <Fragment>
          <Header />
          <DetailsList pokeId={pokeId} />
        </Fragment>
      </div>
    );
  }
}

export default Details;
