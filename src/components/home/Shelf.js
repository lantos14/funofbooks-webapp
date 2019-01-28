import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BookCard } from './BookCard';
import loadingAnimation from '../../images/loading.gif'
import '../../styles/styles.scss';
import 'bulma/css/bulma.css';

export class Shelf extends Component {
  render() {
    const { bookList, updateReviewedBook, loading } = this.props;
    return (
      <div id='main' className={`columns is-multiline main ${loading && 'loading-content'}`}>
        {
          loading ?
            <div>
              <p className='loading-text'>Egy pillanat, a szerver még ébredezik...</p>
              <img src={loadingAnimation}></img>
            </ div> 
            :
            bookList.map((book, i) =>
              <BookCard key={i} updateReviewedBook={updateReviewedBook} bookIndex={i} imgSrc={book.imgSrc} title={book.title} content={book.description} createdAt={book.createdAt}></BookCard>
            )
        }
      </div>
    );
  }
}

Shelf.propTypes = {
  updateReviewedBook: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  bookList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
