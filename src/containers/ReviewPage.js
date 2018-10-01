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
    this.props.getUnspoileredText();
  }

  render() {
    return (
      <div id="review-page">
        <Header backgroundSource="https://bit.ly/2Qnl9Dz"></Header>
        <ReviewContent article={this.props.article}></ReviewContent>
        <Footer />
      </div>
    );
  }
}

ReviewPage.propTypes = {
  getUnspoileredText: PropTypes.func.isRequired,
  // article: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  article: state.unspoileredText.storyData,
})

const mapDispatchToProps = {
  getUnspoileredText,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ReviewPage));