import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
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
        <div className="background"></div>
        <Header backgroundSource="https://bit.ly/2Qnl9Dz"></Header>
        <ReviewContent article={article}></ReviewContent>
        <Footer />
      </div>
    );
  }
}

ReviewPage.propTypes = {
  getBooks: PropTypes.func.isRequired,
  bookList: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedBook: PropTypes.string.isRequired,
};

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
