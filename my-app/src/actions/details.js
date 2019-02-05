const SET_POKEMON = 'SET_POKEMON';
const SET_VS_POKEMON = 'SET_VS_POKEMON';

export default {
  SET_POKEMON,
  SET_VS_POKEMON,
};

export const setPokemonInfo = pokemon => ({ type: SET_POKEMON, pokemon });
export const setPokemonVersus = pokemonsVersus => ({ type: SET_VS_POKEMON, pokemonsVersus });
