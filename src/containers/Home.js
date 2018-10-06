import React, { Component } from 'react';
import { Header } from '../components/Header';
import { Content } from '../components/home/Content';
import { Footer } from '../components/Footer';
import '../styles/styles.scss';

export default class Home extends Component {
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
        <Content article={article}></Content>
        <Footer></Footer>
      </div>
    )
  }
}
