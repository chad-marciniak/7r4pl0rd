import React from 'react';
import './ArticleItem.css';

const ArticleItemView = props => {
  const { title, text, date, link } = props; // look at the standard way to pass props to a view component
  return (
    <div className="ArticleItemContainer">
      <div className="ArticleItemTitle">${title}</div>
      <div className="ArticleItemFooter">
        <span className="ArticleItemDate">Created at: ${date}</span>
        <span className="ArticleItemLink">${link}</span>
      </div>
    </div>
  );
};

export default ArticleItemView;
