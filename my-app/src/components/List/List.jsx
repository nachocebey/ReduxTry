import React, { Component } from 'react';
import PropTypes from 'prop-types';/*
import Row from '../../components/Row/Row';
import { Button } from '../../components/Button/Button';
import { HeaderTable } from '../../components/HeaderTable/HeaderTable';*/
import { checkButtonState, removeItemFromArray, getPokeInfo } from '../../services/services'
import { connect } from 'react-redux';
import { getPokeList } from '../../actions/pokeList';

import './List.css';

export class List extends Component {
  static propTypes = {
    getPokeList: PropTypes.func,
    pokeList: PropTypes.array,
    checkedPokemons: PropTypes.array,
    maxSelection: PropTypes.number,
    totalSelections: PropTypes.number,
    history: PropTypes.object,
    buttonState: PropTypes.bool,

  };

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     //pokeList: [],
  //     checkedPokemons: [],
  //     maxSelection: 2,
  //     buttonState: true
  //   };
  // }

  // handleInputChange = (sender) => {
  //   let checkedPokemonsCopy = this.state.checkedPokemons;
  //   const checkState = sender.currentTarget.checked;
  //   const name = sender.currentTarget.attributes.name.value;

  //   if (checkState) {
  //     checkedPokemonsCopy = [...checkedPokemonsCopy, name];
  //   }
  //   else {
  //     checkedPokemonsCopy = removeItemFromArray(name, checkedPokemonsCopy);
  //   }
  //   let buttonStateCopy = checkButtonState(checkedPokemonsCopy.length, this.state.maxSelection);


  //   this.setState({
  //     checkedPokemons: checkedPokemonsCopy,
  //     buttonState: buttonStateCopy,
  //   })
  // }

  componentDidMount = () => {
    const pokeUrl = `https://pokeapi.co/api/v2/pokemon/`;
    console.log(this.props.getPokeList)

    getPokeInfo(pokeUrl)
      .then(data => this.props.getPokeList(data.results))
  }

  render() {
    return (
      <div>
        {/* <Button history={this.props.history} url={`Comparision/${this.state.checkedPokemons[0]}/${this.state.checkedPokemons[1]}`} name={"Compare"} buttonState={this.state.buttonState} />
        <table className="table table-bordered">
          <thead class="thead-dark">
            <HeaderTable />
          </thead>
          <tbody>
            {
              this.state.pokeList.slice(0, 40).map(pokemon => (
                <Row history={this.props.history} pokemon={pokemon} handleInputChange={this.handleInputChange} />
              ))
            }
          </tbody>
        </table> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pokeList: state.pokeList.elements,
});

export default connect(mapStateToProps, { getPokeList })(List);