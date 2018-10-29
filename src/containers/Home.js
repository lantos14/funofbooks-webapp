import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header } from '../components/Header';
import { Content } from '../components/home/Content';
import { Footer } from '../components/Footer';
import { getBooks, updateReviewedBook } from '../actions/actions'
import { connect } from 'react-redux';
import '../styles/styles.scss';
import { UserBar } from '../components/UserBar';

export class Home extends Component {

  componentDidMount() {
    this.props.getBooks();
  }

  render() {
    const { bookList, email } = this.props;
    return (
      <div id='home'>
        <div className="background"></div>
        <UserBar userName={email} />
        <Header backgroundSource="https://bit.ly/2Qnl9Dz"></Header>
        <Content bookList={bookList} updateReviewedBook={this.props.updateReviewedBook}></Content>
        <Footer></Footer>
      </div>
    )
  }
}

Home.propTypes = {
  getBooks: PropTypes.func.isRequired,
  updateReviewedBook: PropTypes.func.isRequired,
  bookList: PropTypes.arrayOf(PropTypes.object).isRequired,
  email: PropTypes.string,
};

const mapStateToProps = store => ({
  bookList: store.BookList.Books,
  email: store.Users.email,
})

const mapDispatchToProps = {
  getBooks,
  updateReviewedBook,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);