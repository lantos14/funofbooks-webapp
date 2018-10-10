import React, { Component } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ReviewContent } from '../components/reviewPage/ReviewContent';
import { getUnspoileredText } from '../actions/actions'
import { connect } from 'react-redux';

export class ReviewPage extends Component {
  state = {
    article: '',
    selectedBook: '',
  }

  async componentDidMount() {
    await this.props.getUnspoileredText();

    this.setState({
      article: this.props.article,
    });
  }

  render() {
    const article = this.props.article[this.props.selectedBook];
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
  article: store.unspoileredText.storyData,
  selectedBook: store.unspoileredText.selectedBook,
})

const mapDispatchToProps = {
  getUnspoileredText,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewPage);
