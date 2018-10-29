import React, { Component } from 'react';
import { SideButton } from './SideButton'
import { LinkButton } from './LinkButton'
import '../../styles/styles.scss';
import 'bulma/css/bulma.css';

export class SideBar extends Component {
  render() {
    return (
      <div className='side' id='side'>
      <SideButton icon="book" text="Könyvek" link="/"></SideButton>
      <SideButton icon="user-plus" text="Regisztráció" link="/registration"></SideButton>
      <SideButton icon="user" text="Bejelentkezés" link="/login"></SideButton>
      <LinkButton link="https://bit.ly/2CeFxSI"/>
    </div>
    );
  }
}
