import React, { Component } from 'react';
import '../styles/styles.scss';
// import 'bulma/css/bulma.css';

export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <p><strong>FunOfBooks</strong> by Lute.</p>
        </div>
      </footer>
    );
  }
}
