import React from 'react';
import PropTypes from 'prop-types';
import 'bulma/css/bulma.css';
import SideBar from '../home/SideBar';

const Header = (props) => {
    return (
      <div className='header-wrapper'>
      <header className='app-header' />

      <section className='hero is-small'>
          <div className='hero-body'>
            <div className='title flex-center'>
              <h1>FunOfBooks</h1>
              <h2>Egy jó könyv mindenkinek jár</h2>
            </div>
          </div>
        </section>
        <SideBar username={props.username}/>
      </div>
    );
}

Header.propTypes = {
  username: PropTypes.string
}

export default Header;
