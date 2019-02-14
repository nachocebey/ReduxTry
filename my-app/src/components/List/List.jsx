/* eslint-disable react/no-unknown-property */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Row from '../Row/Row';
import Button from '../Button/Button';
import HeaderTable from '../HeaderTable/HeaderTable';
import { checkButtonState, removeItemFromArray } from '../../services/services';
import {
  setButtonState, setCheckedPokemonsState, setErrorMessage,
} from '../../actions/pokeList';
import './List.css';

class List extends Component {
  static propTypes = {
    setButtonState: PropTypes.func,
    setCheckedPokemonsState: PropTypes.func,
    pokeList: PropTypes.array,
    checkedPokemons: PropTypes.array,
    history: PropTypes.object,
    buttonState: PropTypes.bool,
  };

  handleInputChange = (sender) => {
    let { checkedPokemons } = this.props;
    const checkState = sender.currentTarget.checked;
    const name = sender.currentTarget.attributes.name.value;

    if (checkState) {
      checkedPokemons.push(name);
    } else {
      checkedPokemons = removeItemFromArray(name, checkedPokemons);
    }
    this.props.setCheckedPokemonsState(checkedPokemons);
    const buttonStateCopy = checkButtonState(checkedPokemons.length, 2);
    this.props.setButtonState(buttonStateCopy);
  }

  componentDidMount = () => {
    this.props.setButtonState(true);
  }

  componentWillUnmount= () => {
    this.props.setCheckedPokemonsState([]);
  }

  render() {
    return (
      <div>
        <Button
          history={this.props.history}
          url="Comparision"
          name="Compare"
          buttonState={this.props.buttonState}
        />
        <table className="table table-bordered">
          <thead class="thead-dark">
            <HeaderTable />
          </thead>
          <tbody>
            {
              this.props.pokeList.slice(0, 30).map(pokemon => (
                <Row
                  key={pokemon.name}
                  history={this.props.history}
                  pokemon={pokemon}
                  handleInputChange={this.handleInputChange}
                />
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  buttonState: state.pokeList.buttonState,
  checkedPokemons: state.pokeList.checkedPokemons,
});

export default connect(mapStateToProps,
  {
    setButtonState, setCheckedPokemonsState, setErrorMessage,
  })(List);
