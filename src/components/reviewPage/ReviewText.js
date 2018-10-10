import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../styles/styles.scss';
import 'bulma/css/bulma.css';

export class ReviewText extends Component {

  formatText = (raw) => {
    const formattedText = raw.split('/n');
    let result = formattedText.map((paragraph, i) => <p key={i}>{paragraph}</p>);
    return result;
  }

  render() {
    const { article } = this.props;
    const formatText = this.formatText;
    return (
      <div className="review-text">
        <h1>Sztori</h1>
        {article ? formatText(article.story) : null}
        <h1>Vélemény</h1>
        {article ? formatText(article.opinion) : null}
        <h1>Összegzés</h1>
        {article ? formatText(article.summary) : null}
      </div>
    );
  }
}

ReviewText.propTypes = {
  article: PropTypes.object.isRequired,
};
