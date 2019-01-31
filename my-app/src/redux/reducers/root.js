import { combineReducers } from 'redux';
import pokeList from './pokeList';
import details from './details';

export default combineReducers({
  pokeList,
  details,
});
