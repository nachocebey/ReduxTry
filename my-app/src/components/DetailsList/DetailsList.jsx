import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DetailsList.css';


class DetailsList extends Component {
  static propTypes = {
    pokemon: PropTypes.object,
    setPokemonInfo: PropTypes.func,
  };


  render() {
    return (
      <div align="center">
        <div>
          Id:
          {this.props.pokemon && this.props.pokemon.id}
        </div>
        <div>
          Name:
          {this.props.pokemon && this.props.pokemon.name}
        </div>
        <div>
          Height:
          {this.props.pokemon && this.props.pokemon.height}
        </div>
        <div>
          Weight:
          {this.props.pokemon && this.props.pokemon.weight}
        </div>
        <div>
          Base Experience:
          {this.props.pokemon && this.props.pokemon.base_experience}
        </div>
        <div>
          <img src={this.props.pokemon && this.props.pokemon.sprites && this.props.pokemon.sprites.front_default} alt="Logo" />
        </div>
      </div>
    );
  }
}

export default DetailsList;
