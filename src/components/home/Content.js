import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/styles.scss';
import 'bulma/css/bulma.css';
import { Shelf } from './Shelf';

export const Content = (props) => {
  const { bookList, updateReviewedBook, loading } = props;
  return (
    <div id='main-content'>
      <div className='home-content flex-center'>
        <Shelf bookList={bookList} updateReviewedBook={updateReviewedBook} loading={loading}></Shelf>
      </div>
    </div>
  );
}

Content.propTypes = {
  updateReviewedBook: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  bookList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
