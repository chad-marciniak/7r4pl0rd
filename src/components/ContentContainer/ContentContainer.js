import React from 'react';
import './ContentContainer.css';

const ContentContainer = props => {
  return <div className="content-container">{props.children}</div>;
};

export default ContentContainer;

// possibly connect this to store and get props from redux
