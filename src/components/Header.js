import React, { Component } from 'react';
import 'bulma/css/bulma.css';

export class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <section className='hero is-small'>
          <div className='hero-body'>
            <div className='container'>
              <h1>FunOfBooks</h1>
              <h2>Mert egy jó könyv mindenkinek jár</h2>
            </div>
          </div>
        </section>
      </header>
    );
  }
}