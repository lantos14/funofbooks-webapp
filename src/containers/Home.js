import React from 'react';
import { Header } from '../components/Header';
import { Content } from '../components/home/Content';
import { Footer } from '../components/Footer';
import '../styles/styles.scss';

export default class Home extends React.Component {

  render() {
    return (
      <div id='home'>
        <Header backgroundSource="https://bit.ly/2Qnl9Dz"></Header>
        <Content></Content>
        <Footer></Footer>
      </div>
    )
  }
}
