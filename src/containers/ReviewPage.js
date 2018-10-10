import React, { Component } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ReviewContent } from '../components/reviewPage/ReviewContent';
import { getBooks } from '../actions/actions'
import { connect } from 'react-redux';

export class ReviewPage extends Component {
  state = {
    bookList: '',
    selectedBook: '',
  }

  componentDidMount() {
    this.props.getBooks();
  }

  render() {
    const article = this.props.bookList[this.props.selectedBook];
    return (
      <div id="review-page">
        <Header backgroundSource="https://bit.ly/2Qnl9Dz"></Header>
        <ReviewContent article={article}></ReviewContent>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = store => ({
  bookList: store.BookList.Books,
  selectedBook: store.BookList.selectedBook,
})

const mapDispatchToProps = {
  getBooks,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewPage);
