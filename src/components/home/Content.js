import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../styles/styles.scss';
import 'bulma/css/bulma.css';
import { Shelf } from './Shelf';
import { SideBar } from './SideBar';

export class Content extends Component {
  render() {
    const { bookList, updateReviewedBook } = this.props;
    return (
      <div id='main-content'>
        <div className='home-content'>
          <SideBar></SideBar>
          <Shelf bookList={bookList} updateReviewedBook={updateReviewedBook}></Shelf>
        </div>
      </div>
    );
  }
}

Content.propTypes = {
  updateReviewedBook: PropTypes.func.isRequired,
  bookList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
