import React from 'react';
import PropTypes from 'prop-types';
import { SideButton } from './SideButton'
import LinkButton from './LinkButton'
import '../../styles/styles.scss';
import 'bulma/css/bulma.css';

const SideBar = (props) => {
  return (
    <div className='side' id='side'>
      <div className='left-panel'>
        <SideButton
          icon="user"
          text="Bejelentkezés"
          url="/login"
          user={props.userEmail}
        />
        <SideButton icon="book" text="Cikkek" url="/" />
      </div>
      <div className='right-panel'>
        <LinkButton link="https://bit.ly/2CeFxSI" />
      </div>
    </div>
  );
}

SideBar.propTypes = {
  userEmail: PropTypes.string
}

export default SideBar;
