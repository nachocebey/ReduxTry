import pokeList from '../../actions/pokeList'

const initialState = {
  list: [],
};

const reducer = (state = initialState, action) => {
  if (action.type !== null) {
    switch (action.type) {
      case pokeList.GET_LIST:
        return { ...state, list: action.list };
      default:
        return state;
    }
  }
  return state;
};

export default reducer;
