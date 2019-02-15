import React, { Component } from 'react';

export default class RegistrationSheet extends Component {

  render() {
    return (
      <div id="registration-sheet">

        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input className="input" type="email" placeholder="E-mail" />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </p>
        </div>

        <div className="field">
          <p className="control has-icons-left">
            <input className="input" type="password" placeholder="Jelszó" />
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </div>

        <div className="field">
          <p className="control">
            <button className="button is-success">
              Regisztrálok
            </button>
          </p>
        </div>

      </div>
    );
  }
}
