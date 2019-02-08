/* eslint-disable react/no-unknown-property */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import ErrorFromApi from '../../components/ErrorFromApi/ErrorFromApi';
import DetailsList from '../../components/DetailsList/DetailsList';
import { setCheckedPokemonsState, setErrorMessage } from '../../actions/pokeList';
import { getPokeInfo } from '../../services/services';
import { setPokemonInfo, setPokemonVersus } from '../../actions/details';
import './Comparision.css';

class Comparision extends Component {
  static propTypes = {
    checkedPokemons: PropTypes.array,
    params: PropTypes.object,
    match: PropTypes.object,
    setPokemonInfo: PropTypes.func,
    setPokemonVersus: PropTypes.func,
    pokemonsVersus: PropTypes.array,
    message: PropTypes.string,
    setErrorMessage: PropTypes.func,
  };

  componentDidMount() {
    const array = [];
    const { checkedPokemons } = this.props;
    if (checkedPokemons.length > 0) {
      let hola;
      for (let index = 0; index < checkedPokemons.length; index += 1) {
        const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${checkedPokemons[index]}/`;
        hola = getPokeInfo(pokeUrl)
          .then(data => this.props.setPokemonInfo(data))
          .then(element => { array.push(element.pokemon); });
      }
      hola.then(() => { this.props.setPokemonVersus(array); });
    } else {
      this.props.setErrorMessage('There is no pokemons selected');
    }
  }

  render() {
    return (
      <div align="center">
        <Fragment>
          <Header />
          {this.props.pokemonsVersus.length > 0
            ? (
              <div class="container">
                <div class="row">
                  <div class="col">
                    <DetailsList pokemon={this.props.pokemonsVersus[0]} />
                  </div>
                  <div class="col">
                    VS
                  </div>
                  <div class="col">
                    <DetailsList pokemon={this.props.pokemonsVersus[1]} />
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <ErrorFromApi message={this.props.message} />
              </div>
            )}
        </Fragment>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  checkedPokemons: state.pokeList.checkedPokemons,
  pokemon: state.details.pokemon,
  pokemonsVersus: state.details.pokemonsVersus,
  message: state.pokeList.message,
});

export default connect(mapStateToProps, {
  setCheckedPokemonsState,
  setPokemonInfo,
  setPokemonVersus,
  setErrorMessage,
})(Comparision);
