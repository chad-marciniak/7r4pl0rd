import React from 'react';
import './Button.css';

const ButtonView = props => {
  const { name, text, active, onHover, onClick, onBlur } = props;
  return (
    <button
      onMouseLeave={onBlur}
      onMouseOver={onHover}
      onClick={onClick}
      className={`button ${name} ${active}`}
    >
      {text}
    </button>
  );
};

export default ButtonView;
