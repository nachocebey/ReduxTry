import Request from 'superagent';

export const checkButtonState = (e, max) => {
  let buttonState = true;
  if (e === max) {
    buttonState = false;
  }
  return buttonState;
};

// eslint-disable-next-line consistent-return
export const removeItemFromArray = (e, array) => {
  if (array != null) {
    const index = array.indexOf(e);
    if (index !== -1) {
      array.splice(index, 1);
    }
    return array;
  }
};
export const getPokeInfo = (url) => Request.get(url)
  .then(response => response.body);
