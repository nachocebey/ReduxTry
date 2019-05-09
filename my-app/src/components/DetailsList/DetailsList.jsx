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
      <table class="table tableDetails">
        <tbody>
            <tr>
                <th>Id</th>
                <td>{this.props.pokemon && this.props.pokemon.id}</td>
            </tr>
            <tr>
                <th>Name</th>
                <td>{this.props.pokemon && this.props.pokemon.name}</td>
            </tr>
            <tr>
                <th>Height</th>
                <td>{this.props.pokemon && this.props.pokemon.height}</td>
            </tr>
            <tr>
                <th>Weight</th>
                <td>{this.props.pokemon && this.props.pokemon.weight}</td>
            </tr>
            <tr>
                <th>Base Experience</th>
                <td>{this.props.pokemon && this.props.pokemon.base_experience}</td>
            </tr>
            <tr>
                <th>Sprite</th>
                <td>          
                  <img src={this.props.pokemon && this.props.pokemon.sprites && this.props.pokemon.sprites.front_default} alt="Logo" />
                </td>
            </tr>
        </tbody>
      </table>
    );
  }
}

export default DetailsList;
