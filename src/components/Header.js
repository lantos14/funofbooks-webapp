import React from 'react';
import 'bulma/css/bulma.css';
import bookIcon from '../images/mage-icon.png';
import SideBar from './home/SideBar';

const Header = () => {
    return (
      <header className="App-header">
        <section className='hero is-small'>
          <div className='hero-body'>
            <div className='title'>
              <h1>FunOfBooks</h1>
              <h2>Mert egy jó könyv mindenkinek jár</h2>
            </div>
            <div className='img-container'>
              <img src={bookIcon} width='200px' height='200px'></img>
            </div>
          </div>
        </section>
        <SideBar />
      </header>
    );
}

export default Header;
