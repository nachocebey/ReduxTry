import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import DetailsList from '../../components/DetailsList/DetailsList';
import { setCheckedPokemonsState } from '../../actions/pokeList';
import { getPokeInfo } from '../../services/services';
import { setPokemonInfo, setPokemonVersus } from '../../actions/details';

class Comparision extends Component {
  static propTypes = {
    checkedPokemons: PropTypes.array,
    params: PropTypes.object,
    match: PropTypes.object,
    setPokemonInfo: PropTypes.func,
    setPokemonVersus: PropTypes.func,
    pokemonsVersus: PropTypes.array,
  };

  componentDidMount() {
    // TODO Bucle;
    const array = [];
    const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${this.props.checkedPokemons[0]}/`;
    const pokeUrl2 = `https://pokeapi.co/api/v2/pokemon/${this.props.checkedPokemons[1]}/`;

    getPokeInfo(pokeUrl)
      .then(data => this.props.setPokemonInfo(data))
      .then(element => { array.push(element.pokemon); });

    getPokeInfo(pokeUrl2)
      .then(data => this.props.setPokemonInfo(data))
      .then(element => { array.push(element.pokemon); })
      .then(() => { this.props.setPokemonVersus(array); });
  }

  render() {
    return (
      <div>
        <Fragment>
          <Header />
          <DetailsList pokemon={this.props.pokemonsVersus[0]} />
          <div>VS</div>
          <DetailsList pokemon={this.props.pokemonsVersus[1]} />
        </Fragment>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  checkedPokemons: state.pokeList.checkedPokemons,
  pokemon: state.details.pokemon,
  pokemonsVersus: state.details.pokemonsVersus,
});

export default connect(mapStateToProps, {
  setCheckedPokemonsState,
  setPokemonInfo,
  setPokemonVersus,
})(Comparision);
