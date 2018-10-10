import React, { Component } from 'react';
import '../../styles/styles.scss';
import 'bulma/css/bulma.css';
import { Shelf } from './Shelf';
import { SideBar } from './SideBar';

export class Content extends Component {
  render() {
    const { bookList, updateReviewedBook } = this.props;
    return (
      <div id='main-content'>
        <div className='content columns is-link'>
          <SideBar></SideBar>
          <Shelf bookList={bookList} updateReviewedBook={updateReviewedBook}></Shelf>
        </div>
      </div>
    );
  }
}