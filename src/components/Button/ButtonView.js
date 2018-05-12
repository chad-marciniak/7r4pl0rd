import React from 'react';
import './Button.css';

const ButtonView = (props) => {
  const {
    name,
    active,
    onHover,
    onClick,
    onBlur,
  } = props;
  return (
    <button onMouseLeave={onBlur} onMouseOver={onHover} onClick={onClick} className={ `button ${ name } ${ active }` } />
  );
};

export default ButtonView;
