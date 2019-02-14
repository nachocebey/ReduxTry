import React, { Component, Fragment } from 'react';
import { Router, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import getRoutes from '../../Routes';
import Loading from '../../components/Loading/Loading';
import ErrorFromApi from '../../components/ErrorFromApi/ErrorFromApi';


import DevTools from '../DevTools/devTools';

class Root extends Component {
  static propTypes = {
    history: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.routes = getRoutes();
  }

  render() {
    return (
      <Fragment>
        <ErrorFromApi />
        <Loading />
        <Router history={this.props.history}>
          <Switch>
            {this.routes}
          </Switch>
        </Router>
        <DevTools />
      </Fragment>
    );
  }
}

export default Root;
