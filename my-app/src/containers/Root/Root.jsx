import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import getRoutes from '../../Routes';
import { Router, Switch } from 'react-router-dom';

class Root extends Component {
  static propTypes = {
    history: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.routes = getRoutes();
  };

  render() {
    return (
      <Fragment>
        <Router history={this.props.history} >
          <Switch>
            {this.routes}
          </Switch>
        </Router>
      </Fragment>
    )
  }

};

export default Root;


