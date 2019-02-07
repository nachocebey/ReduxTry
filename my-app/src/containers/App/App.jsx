import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import ErrorFromApi from '../../components/ErrorFromApi/ErrorFromApi';
import List from '../../components/List/List';
import Loading from '../../components/Loading/Loading';
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
    message: PropTypes.string,
    isLoading: PropTypes.bool,
    setLoadingState: PropTypes.func,
  };

  componentDidMount = () => {
    const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/';
    getPokeInfo(pokeUrl)
      .then(data => this.props.getPokeList(data.results))
      .then(x => new Promise(resolve => setTimeout(() => resolve(x), 1000)))
      .then(() => this.props.setLoadingState(false))
      .catch(error => this.props.setErrorMessage(error.message));
  }

  render() {
    return (
      <div>
        {this.props.isLoading
          ? (
            <div>
              <Loading />
            </div>
          ) : (
            <div>
              <Fragment>
                <Header />
                <List history={this.props.history} pokeList={this.props.pokeList} />
                <ErrorFromApi message={this.props.message} />
              </Fragment>
            </div>

          )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pokeList: state.pokeList.list,
  message: state.pokeList.message,
  isLoading: state.pokeList.loadingState,
});

export default connect(mapStateToProps,
  {
    getPokeList, setErrorMessage, setLoadingState,
  })(App);
