import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../components/Button/Button';
import './Row.css';

export class Row extends Component {
  static propTypes = {
    currentData: PropTypes.array,
    limit: PropTypes.number,
    history: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      checkState: 2
    };
  }

  render() {
    const {name} = this.props.pokemon;
    return (
      <tr>
        <td><h5>{name}</h5></td>
        <td>
          <h6>Select: &nbsp;
          <input
            name={name}
            type="checkbox"
            onChange={this.props.handleInputChange}
          />
          </h6>
        </td>
        <td>
          <Button history={this.props.history} url={`Details/${name}`} name={"Get Pokemon Info"} />
        </td>
      </tr>
    )
  };
}


export default Row;