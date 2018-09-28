import React, { Component } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
// import { ReviewContent } from '../components/reviewContent';

export default class ReviewPage extends Component {
  render() {
    return (
      <div id="review-page">
        <Header backgroundSource="https://bit.ly/2Qnl9Dz"></Header>
        {/* <ReviewContent></ReviewContent> */}
        <Footer />
      </div>
    );
  }
}