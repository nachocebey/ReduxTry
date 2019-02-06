import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import DetailsList from '../../components/DetailsList/DetailsList';
import { getPokeInfo } from '../../services/services';
import { setPokemonInfo } from '../../actions/details';

class Details extends Component {
  static propTypes = {
    params: PropTypes.object,
    pokeId: PropTypes.number,
    match: PropTypes.object,
    pokemon: PropTypes.object,
    setPokemonInfo: PropTypes.func,
  };

  componentDidMount() {
    const { pokeId } = this.props.match.params;
    const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${pokeId}/`;
    getPokeInfo(pokeUrl)
      .then(data => this.props.setPokemonInfo(data));
  }

  render() {
    return (
      <div>
        <Fragment>
          <Header />
          <DetailsList pokemon={this.props.pokemon} />
        </Fragment>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pokemon: state.details.pokemon,
});

export default connect(mapStateToProps, {
  setPokemonInfo,
})(Details);
