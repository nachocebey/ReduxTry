import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './Row.css';

class Row extends Component {
  static propTypes = {
    currentData: PropTypes.array,
    limit: PropTypes.number,
    history: PropTypes.object,
    name: PropTypes.string,
    pokemon: PropTypes.object,
    handleInputChange: PropTypes.func,
  };

  render() {
    const { name } = this.props.pokemon;
    return (
      <tr>
        <td><h5>{name}</h5></td>
        <td>
          <h6>
            Select: &nbsp;
            <input
              name={name}
              type="checkbox"
              onChange={this.props.handleInputChange}
            />
          </h6>
        </td>
        <td>
          <Button history={this.props.history} url={`Details/${name}`} name="Get Pokemon Info" />
        </td>
      </tr>
    );
  }
}

export default Row;
