import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import DetailsList from '../../components/DetailsList/DetailsList';
import { setCheckedPokemonsState } from '../../actions/pokeList';

class Comparision extends Component {
  static propTypes = {
    selectedPokemons: PropTypes.array,
    checkedPokemons: PropTypes.array,
    params: PropTypes.object,
    match: PropTypes.object,
  };

  render() {
    debugger;
    return (
      <div>
        <Fragment>
          <Header />
          <DetailsList pokeId={this.props.checkedPokemons[0]} />
          <div>VS</div>
          <DetailsList pokeId={this.props.checkedPokemons[1]} />
        </Fragment>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  checkedPokemons: state.pokeList.checkedPokemons,
});

export default connect(mapStateToProps, { setCheckedPokemonsState })(Comparision);
