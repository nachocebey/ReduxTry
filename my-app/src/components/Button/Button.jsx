import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

const Button = ({
  url,
  history,
  name,
  buttonState,
}) => (
  <button
    type="button"
    onClick={() => history.push(url)}
    disabled={buttonState}
  >
    {name}
  </button>
);

Button.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string,
  history: PropTypes.object,
  innerHtml: PropTypes.string,
  buttonState: PropTypes.bool,
};

export default Button;
