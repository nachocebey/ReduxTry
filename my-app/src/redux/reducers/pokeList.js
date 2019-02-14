import pokeList from '../../actions/pokeList';

const initialState = {
  list: [],
  buttonState: false,
  checkedPokemons: [],
  pokemon: {},
  message: '',
  loadingState: true,
};

const reducer = (state = initialState, action) => {
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
      case pokeList.SET_LOADING_STATE:
        return { ...state, loadingState: action.loadingState };
      default:
        return state;
    }
  }
  return state;
};
export default reducer;
