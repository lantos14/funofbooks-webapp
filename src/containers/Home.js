import React, { Component } from 'react';
import { Header } from '../components/Header';
import { Content } from '../components/home/Content';
import { Footer } from '../components/Footer';
import { getUnspoileredText, updateReviewedBook } from '../actions/actions'
import { connect } from 'react-redux';
import '../styles/styles.scss';

export class Home extends Component {
  state = {
    article: '',
  }

  async componentDidMount() {
    await this.props.getUnspoileredText();

    this.setState({
      article: this.props.article,
    });
  }

  render() {
    const { article } = this.props;
    return (
      <div id='home'>
        <Header backgroundSource="https://bit.ly/2Qnl9Dz"></Header>
        <Content article={article} updateReviewedBook={this.props.updateReviewedBook}></Content>
        <Footer></Footer>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  article: store.unspoileredText.storyData,
})

const mapDispatchToProps = {
  getUnspoileredText,
  updateReviewedBook,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);