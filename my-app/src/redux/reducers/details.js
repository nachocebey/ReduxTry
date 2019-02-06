import details from '../../actions/details';

const initialState = {
  pokemon: [],
  pokemonsVersus: [],
};

const reducer = (state = initialState, action) => {
  if (action.type !== null) {
    switch (action.type) {
      case details.SET_POKEMON:
        return { ...state, pokemon: action.pokemon };
      case details.SET_VS_POKEMON:
        return { ...state, pokemonsVersus: action.pokemonsVersus };
      default:
        return state;
    }
  }
  return state;
};

export default reducer;
