import React, { Component } from 'react';

import './HeaderTable.css';

export class HeaderTable extends Component {
  render() {
    return (
      <tr>
        <th><h4>Name</h4></th>
        <th><h4>Comparision</h4></th>
        <th><h4>Pokemon Info</h4></th>
      </tr>
    );
  }
}
export default HeaderTable;
