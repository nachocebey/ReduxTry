import details from '../../actions/details';

const initialState = {
  pokemon: {},
};

const reducer = (state = initialState, action) => {
  if (action.type !== null) {
    switch (action.type) {
      case details.SET_POKEMON:
        return { ...state, pokemon: action.pokemon };
      default:
        return state;
    }
  }
  return state;
};

export default reducer;
