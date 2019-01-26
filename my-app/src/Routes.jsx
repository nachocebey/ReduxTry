import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import App from './containers/App/App';
import Details from './containers/Details/Details';
import Comparision from './containers/Comparison/Comparision';

const getRoutes = () => (
  <Fragment>
    <Route exact path="/list" component={App} />
    <Route exact path="/Details/:pokeId" component={Details} />
    <Route exact path="/Comparision/:pokeId1/:pokeId2" component={Comparision} />
  </Fragment>
);

export default getRoutes;
