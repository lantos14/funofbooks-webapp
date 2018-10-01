import React, { Component } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ReviewContent } from '../components/reviewPage/ReviewContent';
import { getUnspoileredText } from '../actions/actions'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

export class ReviewPage extends Component {

  componentDidMount() {
    console.log('component mounted');
    this.props.getUnspoileredText();
  }

  render() {
    return (
      <div id="review-page">
        <Header backgroundSource="https://bit.ly/2Qnl9Dz"></Header>
        <ReviewContent></ReviewContent>
        <Footer />
      </div>
    );
  }
}

ReviewPage.propTypes = {
  getUnspoileredText: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = {
  getUnspoileredText,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ReviewPage));