import React from 'react';
import { SideButton } from './SideButton'
import LinkButton from './LinkButton'
import '../../styles/styles.scss';
import 'bulma/css/bulma.css';

const SideBar = () => {
  return (
    <div className='side' id='side'>
      <div className='left-panel'>
        <SideButton icon="book" text="Könyvek" />
      </div>
      <div className='right-panel'>
        <LinkButton link="https://bit.ly/2CeFxSI" />
      </div>
    </div>
  );
}

export default SideBar;
