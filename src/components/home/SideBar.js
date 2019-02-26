import React from 'react';
import { SideButton } from './SideButton'
import LinkButton from './LinkButton'
import '../../styles/styles.scss';
import 'bulma/css/bulma.css';

const SideBar = () => {
    return (
      <div className='side' id='side'>
      <SideButton icon="book" text="Könyvek" ></SideButton>
      <LinkButton link="https://bit.ly/2CeFxSI"/>
    </div>
    );
}

export default SideBar;
