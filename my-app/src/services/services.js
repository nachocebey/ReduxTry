export const checkButtonState = (e, max) => {
  let buttonState = true;
  if (e === max) {
    buttonState = false;
  }
  return buttonState;
};

export const removeItemFromArray = (e, array) => {
  if (array != null) {
    const index = array.indexOf(e);
    if (index !== -1) {
      array.splice(index, 1);
    }
    return array;
  }
};

export const getPokeInfo = (url) => fetch(url)
  .then(response => response.json());

export default removeItemFromArray;
