import React, { Component } from 'react';
import '../styles/styles.scss';
import 'bulma/css/bulma.css';

export class RegForm extends Component {
  render() {
    return (
      <div id="reg-form">

        <div className="field">
          <label className="label">Nickname</label>
          <div className="control">
            <input className="input" type="text" placeholder="Text input" />
          </div>
          <p className="help">This is a help text</p>
        </div>

        <div className="field">
          <p className="control has-icons-left">
            <input className="input" type="password" placeholder="Password" />
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </div>
      </div>
    );
  }
}
