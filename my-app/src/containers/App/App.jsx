import React, { Component, Fragment } from 'react';
import { Header } from '../../components/Header/Header';
import { List } from '../../components/List/List';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Fragment>
          <Header />
          <List history={this.props.history} />
        </Fragment>
      </div>
    );
  }
}

export default App;
