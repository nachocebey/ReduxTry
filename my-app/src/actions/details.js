const SET_POKEMON = 'SET_POKEMON';

export default {
  SET_POKEMON,
};

export const setPokemonInfo = pokemon => ({ type: SET_POKEMON, pokemon });
