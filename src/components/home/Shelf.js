import React, { Component } from 'react';
import { BookCard } from './BookCard';
import '../../styles/styles.scss';
import 'bulma/css/bulma.css';

export class Shelf extends Component {
  render() {
    return (
      <div id='main' className='columns column is-multiline main is-three-quarter'>
      <BookCard imgSrc="https://bit.ly/2Oj1Vh1" title="A Rovásember" content="Rovásember bevezető"></BookCard>
      <BookCard imgSrc="https://bit.ly/2Oj1Vh1" title="Drizzt Saga" content="Drizzt Do'Urden kalandjai"></BookCard>
      <BookCard imgSrc="https://bit.ly/2MyjQi2" title="Ködszerzet" content="jó hosszú, de jó"></BookCard>
      <BookCard imgSrc="https://bit.ly/2NH6uEW" title="Tövisek Királya" content="Hát, olvastam már rosszabbat"></BookCard>
    </div>
    );
  }
}