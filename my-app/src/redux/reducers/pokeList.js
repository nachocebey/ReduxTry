import pokeList from '../../actions/pokeList';

const initialState = {
  list: [],
  buttonState: false,
  checkedPokemons: [],
  pokemon: {},
  message: '',
};

const reducer = (state = initialState, action) => {
  debugger;
  if (action.type !== null) {
    switch (action.type) {
      case pokeList.GET_LIST:
        return { ...state, list: action.list };
      case pokeList.SET_BUTTON:
        return { ...state, buttonState: action.button };
      case pokeList.SET_CHECKED:
        return { ...state, checkedPokemons: action.checkedList };
      case pokeList.SET_ERROR_MESSAGE:
        return { ...state, message: action.message };
      default:
        return state;
    }
  }
  return state;
};

export default reducer;
