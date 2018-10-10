import React, { Component } from 'react';
import { Header } from '../components/Header';
import { Content } from '../components/home/Content';
import { Footer } from '../components/Footer';
import { getBooks, updateReviewedBook } from '../actions/actions'
import { connect } from 'react-redux';
import '../styles/styles.scss';

export class Home extends Component {
  state = {
    bookList: [],
  }

  componentDidMount() {
    this.props.getBooks();
  }

  render() {
    const { bookList } = this.props;
    return (
      <div id='home'>
        <Header backgroundSource="https://bit.ly/2Qnl9Dz"></Header>
        <Content bookList={bookList} updateReviewedBook={this.props.updateReviewedBook}></Content>
        <Footer></Footer>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  bookList: store.BookList.Books,
})

const mapDispatchToProps = {
  getBooks,
  updateReviewedBook,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);