import React, { Component } from 'react';
import { SideButton } from './SideButton'
import '../../styles/styles.scss';
import 'bulma/css/bulma.css';

export class SideBar extends Component {
  render() {
    return (
      <div className='side' id='side'>
      <SideButton icon="book" text="Cikkek" ></SideButton>
      <SideButton custom={true} icon="question-circle" text="" ></SideButton>
    </div>
    );
  }
}
