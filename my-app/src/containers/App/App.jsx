import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import List from '../../components/List/List';
import { getPokeInfo } from '../../services/services';
import {
  getPokeList, setErrorMessage, setLoadingState,
} from '../../actions/pokeList';

import './App.css';

class App extends Component {
  static propTypes = {
    history: PropTypes.object,
    getPokeList: PropTypes.func,
    setErrorMessage: PropTypes.func,
    pokeList: PropTypes.array,
    setLoadingState: PropTypes.func,
  };

  componentDidMount = () => {
    const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/';
    getPokeInfo(pokeUrl)
      .then(x => new Promise(resolve => setTimeout(() => resolve(x), 1000)))
      .then(data => this.props.getPokeList(data.results))
      .then(() => this.props.setLoadingState(false))

      .catch(error => this.props.setErrorMessage(error.message))
      .then(() => this.props.setLoadingState(false));
  }

  render() {
    return (
      <div>
        <div>
          <Fragment>
            <Header />
            <List history={this.props.history} pokeList={this.props.pokeList} />
          </Fragment>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pokeList: state.pokeList.list,
  message: state.pokeList.message,
});

export default connect(mapStateToProps,
  {
    getPokeList, setErrorMessage, setLoadingState,
  })(App);
