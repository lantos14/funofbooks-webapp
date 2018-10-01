import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import '../../styles/styles.scss';
import 'bulma/css/bulma.css';

export class ReviewText extends Component {

  render() {
    return (
      <div className="review-text">
        <h1>Sztori</h1>
        <p>{this.props.article.story}</p>
        <h1>Vélemény</h1>
        <p>{this.props.article.opinion}</p>
        <h1>Összegzés</h1>
        <p>{this.props.article.summary}</p>
      </div>
    );
  }
}

// ReviewText.propTypes = {
//   article: PropTypes.object.isRequired,
// };
