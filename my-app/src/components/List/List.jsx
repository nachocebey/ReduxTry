import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Row from '../Row/Row';
import Button from '../Button/Button';
import HeaderTable from '../HeaderTable/HeaderTable';
import { checkButtonState, removeItemFromArray, getPokeInfo } from '../../services/services';
import { getPokeList, setButtonState, setCheckedPokemonsState } from '../../actions/pokeList';
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
    const buttonStateCopy = checkButtonState(checkedPokemons.length, this.props.maxSelection);
    this.props.setButtonState(buttonStateCopy);
    debugger;
  }

  componentDidMount = () => {
    const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/';
    getPokeInfo(pokeUrl)
      .then(data => this.props.getPokeList(data.results));
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
              this.props.pokeList.slice(0, 40).map(pokemon => (
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
});

export default connect(mapStateToProps,
  { getPokeList, setButtonState, setCheckedPokemonsState })(List);
