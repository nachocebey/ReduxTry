import pokeList from '../../actions/pokeList';

const initialState = {
  list: [],
  buttonState: true,
  checkedPokemons: [],
  pokemon: {},
};

const reducer = (state = initialState, action) => {
  if (action.type !== null) {
    switch (action.type) {
      case pokeList.GET_LIST:
        return { ...state, list: action.list };
      case pokeList.SET_BUTTON:
        return { ...state, buttonState: action.buttonState };
      case pokeList.SET_CHECKED:
        return { ...state, checkedPokemons: action.checkedList };
      default:
        return state;
    }
  }
  return state;
};

export default reducer;
