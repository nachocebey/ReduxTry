import React, { Component } from 'react';
import gengar from '../../services/gengarSprite.png';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <table>
            <tbody>
              <tr>
                  <td><h2>Pokemons</h2></td>
                  <td><img src={gengar} alt="Logo" /></td>
              </tr>
            </tbody>
          </table>            
        </div>
      </header>

    );
  }
}
export default Header;
