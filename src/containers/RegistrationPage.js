import React, { Component } from 'react';
import { Header } from '../components/Header';
import { RegForm } from '../components/RegForm';
import { Footer } from '../components/Footer';
import '../styles/RegistrationPage.scss';

export default class RegistrationPage extends Component {
  state = {}

  render() {
    return (
      <div id='registration-page'>
        <div className="background"></div>
        <Header backgroundSource="https://bit.ly/2Qnl9Dz"/>
        <RegForm/>
        <Footer/>
      </div>
    )
  }
}
