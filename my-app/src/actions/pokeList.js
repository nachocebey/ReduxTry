const GET_LIST = 'GET_LIST';
const SET_BUTTON = 'SET_BUTTON';
const SET_CHECKED = 'SET_BUTTON';
const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
const SET_LOADING_STATE = 'SET_LOADING_STATE';

export default {
  GET_LIST,
  SET_BUTTON,
  SET_CHECKED,
  SET_ERROR_MESSAGE,
  SET_LOADING_STATE,
};

export const getPokeList = list => ({ type: GET_LIST, list });
export const setButtonState = button => ({ type: SET_BUTTON, button });
export const setCheckedPokemonsState = checkedList => ({ type: SET_CHECKED, checkedList });
export const setErrorMessage = message => ({ type: SET_ERROR_MESSAGE, message });
export const setLoadingState = loadingState => ({ type: SET_LOADING_STATE, loadingState });
