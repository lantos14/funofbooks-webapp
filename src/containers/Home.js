import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import { Content } from '../components/home/Content';
import Footer from '../components/Footer';
import { getBooks, updateReviewedBook, regClear } from '../actions/actions'
import { connect } from 'react-redux';
import '../styles/styles.scss';

export class Home extends Component {
  state = {
    bookList: [],
  }

  componentDidMount() {
    this.props.getBooks();
    this.props.regClear();
  }

  render() {
    const { bookList, email } = this.props;
    return (
      <div id='home'>
        <Header email={email}/>
        <Content
          bookList={bookList}
          updateReviewedBook={this.props.updateReviewedBook}
          loading={this.props.loading}
        />
        <Footer />
      </div>
    )
  }
}

Home.propTypes = {
  getBooks: PropTypes.func.isRequired,
  regClear: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  updateReviewedBook: PropTypes.func.isRequired,
  bookList: PropTypes.arrayOf(PropTypes.object).isRequired,
  email: PropTypes.string,
};

const mapStateToProps = store => ({
  bookList: store.BookList.Books,
  loading: store.BookList.loading,
  email: store.User.email,
})

const mapDispatchToProps = {
  getBooks,
  updateReviewedBook,
  regClear,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
