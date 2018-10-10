import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BookCard } from './BookCard';
import '../../styles/styles.scss';
import 'bulma/css/bulma.css';

export class Shelf extends Component {
  render() {
    const { bookList, updateReviewedBook } = this.props;
    return (
      <div id='main' className='columns column is-multiline main is-three-quarter'>
        {
          bookList.map((book, i) =>
            <BookCard key={i} updateReviewedBook={updateReviewedBook} bookIndex={i} imgSrc="https://bit.ly/2Oj1Vh1" title={book.title} content="Content kell a DB-be"></BookCard>
          )
        }
      </div>
    );
  }
}

Shelf.propTypes = {
  updateReviewedBook: PropTypes.func.isRequired,
  bookList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
