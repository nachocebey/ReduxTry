const GET_LIST = 'GET_LIST';

export default {
  GET_LIST,
}

export const getPokeList = list => ({ type: GET_LIST, list });
