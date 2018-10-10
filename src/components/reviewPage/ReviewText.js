import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../styles/styles.scss';
import 'bulma/css/bulma.css';

export class ReviewText extends Component {

  render() {
    const { article } = this.props;
    return (
      <div className="review-text">
        <h1>Sztori</h1>
        {article ? <p>{article.story}</p> : null}
        <h1>Vélemény</h1>
        {article ? <p>{article.opinion}</p> : null}
        <h1>Összegzés</h1>
        {article ? <p>{article.summary}</p> : null}
      </div>
    );
  }
}

ReviewText.propTypes = {
  article: PropTypes.object.isRequired,
};
