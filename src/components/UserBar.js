import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bulma/css/bulma.css';
import '../styles/UserBar.scss';

export class UserBar extends Component {

  render() {
    const { userName } = this.props;
    return (
      <div className="user-bar">
      <p>Felhasználó: <b>{userName || 'nem vagy bejelentkezve'}</b></p>
      </div>
    );
  }
}

UserBar.propTypes = {
  userName: PropTypes.string,
};