import React, { Component } from 'react';
import '../styles/styles.scss';
import 'bulma/css/bulma.css';

export class RegForm extends Component {

  onSubmit = () => {
    const inputList = document.querySelectorAll('.input')
    const values = {};
    for (let input of inputList) {
      values[input.type] = input.value;
    }
    // values can be forwarded now to action
  }

  render() {
    return (
      <div id="reg-form">

        <div className="field">
          <label className="label">Nickname</label>
          <div className="control">
            <input className="input" type="text" placeholder="Hogy ismerjen meg téged a világ?" />
          </div>
          <p className="help">Ezzel a névvel tudsz a továbbiakban hozzászólásokat írni az egyes könyvismertetőkhöz.</p>
        </div>

        <div className="field">
          <label className="label">E-mail</label>
          <p className="control">
            <input className="input" type="email" placeholder="Elektronikus levélcímed" />
          </p>
          <p className="help">Ígérem, nincs spam. Még nem tudom hogyan kell.</p>
        </div>

        <div className="field">
          <label className="label">Jelszó</label>
          <p className="control">
            <input className="input" type="password" placeholder="Jelszó" />
          </p>
            <p className="help">Tudod, a szokásos. Legyen nehezen feltörhető, de könnyen eszedbe jutható jelszavad. Felőlem mondjuk a kutyád neve is jó lesz.</p>
        </div>

        <div className="field">
          <p className="control">
            <button className="button is-success" onClick={this.onSubmit}>
              Regisztrálok!
              </button>
          </p>
        </div>
      </div>
    );
  }
}
