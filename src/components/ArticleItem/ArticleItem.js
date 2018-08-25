import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import ArticleItemView from './ArticleItemView';

class ArticleItemComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ArticleItemView
        title={this.props.title}
        date={this.props.date}
        link={this.props.link}
      />
    );
  }
}

const mapStateToProps = state => {};
const mapDispatchToProps = disatch => bindActionCreators({}, dispatch);
const ArticleItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleItemComponent);

export default ArticleItem;