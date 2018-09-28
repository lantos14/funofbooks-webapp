import React, { Component } from 'react';
import logo from '../images/title-gold.png'
import 'bulma/css/bulma.css';

export class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <section className='hero is-small'>
          <div className='hero-body'>
            <div className='container'>
              <img src={logo} alt="FunOfBooks title"/>
            </div>
          </div>
        </section>
      </header>
    );
  }
}