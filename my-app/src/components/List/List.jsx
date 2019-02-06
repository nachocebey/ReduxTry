/* eslint-disable react/no-unknown-property */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Row from '../Row/Row';
import Button from '../Button/Button';
import HeaderTable from '../HeaderTable/HeaderTable';
import ErrorFromApi from '../ErrorFromApi/ErrorFromApi';
import { checkButtonState, removeItemFromArray, getPokeInfo } from '../../services/services';
import {
  getPokeList, setButtonState, setCheckedPokemonsState, setErrorMessage,
} from '../../actions/pokeList';
import './List.css';

class List extends Component {
  static propTypes = {
    getPokeList: PropTypes.func,
    pokeList: PropTypes.array,
    checkedPokemons: PropTypes.array,
    maxSelection: PropTypes.number,
    history: PropTypes.object,
    buttonState: PropTypes.bool,
    setCheckedPokemonsState: PropTypes.func,
    setButtonState: PropTypes.func,
    setErrorMessage: PropTypes.func,
    message: PropTypes.string,
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
    this.props.setCheckedPokemonsState(this.props.checkedPokemons);
    const buttonStateCopy = checkButtonState(checkedPokemons.length, 2);
    this.props.setButtonState(buttonStateCopy);
  }

  componentDidMount = () => {
    const pokeUrl = 'https://pokeapi.co/api/v2/pokemo/';

    getPokeInfo(pokeUrl)
      .then(data => this.props.getPokeList(data.results))
      .catch(this.props.setErrorMessage('ERROR: CANNOT CONNECT WITH THE POKEAPI'));

    this.props.setButtonState(true);
  }

  render() {
    debugger;
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
            <ErrorFromApi message={this.props.message} />
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
  pokeList: state.pokeList.list,
  buttonState: state.pokeList.buttonState,
  checkedPokemons: state.pokeList.checkedPokemons,
  message: state.pokeList.message,
});

export default connect(mapStateToProps,
  {
    getPokeList, setButtonState, setCheckedPokemonsState, setErrorMessage,
  })(List);
