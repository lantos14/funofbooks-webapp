import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import PropTypes from 'prop-types';
import '../../styles/styles.scss';
import { history } from '../../store/configureStore';

export class BookCard extends Component {

  handleOnClick = (e) => {
    this.props.updateReviewedBook(e.currentTarget.id);
    history.push('/review');
  }

  render() {
    const { bookIndex, imgSrc, title, content } = this.props;
    return (
      <div id={bookIndex} className="column is-one-third card" onClick={this.handleOnClick}>
        <div className="card-image">
          <div className="book-image image is-4by3">
            <img src={imgSrc} alt={`${title}-cover`}></img>
          </div>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
            </div>
          </div>
          <div className="content">
            <p>{content}</p>
          </div>
        </div>
      </div>
    );
  }
}

BookCard.propTypes = {
  updateReviewedBook: PropTypes.func.isRequired,
  bookIndex: PropTypes.number.isRequired,
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
