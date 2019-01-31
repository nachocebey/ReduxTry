import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DetailsList.css';
import { connect } from 'react-redux';
import { getPokeInfo } from '../../services/services';
import { setPokemonInfo } from '../../actions/details';

class DetailsList extends Component {
  static propTypes = {
    pokemon: PropTypes.object,
    pokeId: PropTypes.string,
    setPokemonInfo: PropTypes.func,
  };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     pokemon: {},
  //     pokeId: this.props.pokeId,
  //   };
  // }

  componentDidMount() {
    const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${this.props.pokeId}/`;
    getPokeInfo(pokeUrl)
      .then(data => this.props.setPokemonInfo(data));
  }

  render() {
    debugger;
    return (
      <div>
        <div>
          Id:
          {this.props.pokeId}
        </div>
        <div>
          Name:
          {this.props.pokemon.name}
        </div>
        <div>
          Height:
          {this.props.pokemon.height}
        </div>
        <div>
          Weight:
          {this.props.pokemon.weight}
        </div>
        <div>
          Base Experience:
          {this.props.pokemon.base_experience}
        </div>
        <div>
          <img src={this.props.pokemon.sprites && this.props.pokemon.sprites.front_default} alt="Logo" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pokemon: state.details.pokemon,
});
export default connect(mapStateToProps, { setPokemonInfo })(DetailsList);
