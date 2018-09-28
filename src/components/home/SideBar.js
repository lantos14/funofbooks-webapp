import React, { Component } from 'react';
import { SideButton } from './SideButton'
import '../../styles/styles.scss';
import 'bulma/css/bulma.css';

export class SideBar extends Component {
  render() {
    return (
      <div className='column is-link is-one-fifth side' id='side'>
      <SideButton icon="book" text="Cikkek" ></SideButton>
      <SideButton icon="question-circle" text="Rólam" ></SideButton>
    </div>
    );
  }
}
