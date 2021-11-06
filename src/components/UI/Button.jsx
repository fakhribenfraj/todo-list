import React from 'react';

import classes from './Button.module.scss';

const Button = (props) => {
  return (
    <button
      className={props.bg === 'primary'?`${classes.button} ${classes.buttonPrimary}`:classes.button}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
