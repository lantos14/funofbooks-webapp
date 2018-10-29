import React, { Component } from 'react';
import { Header } from '../components/Header';
import { RegForm } from '../components/RegForm';
import { Footer } from '../components/Footer';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../actions/actions'
import '../styles/RegistrationPage.scss';

export class LoginPage extends Component {
  state = {
    regSuccess: this.props.regSuccess,
  }

  render() {
    return (
      <div id='login-page'>
        <div className="background"></div>
        <Header backgroundSource="https://bit.ly/2Qnl9Dz"/>
        <RegForm regAction={this.props.login} regSuccess={this.state.regSuccess} />
        <Footer/>
      </div>
    )
  }
}

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  regSuccess: PropTypes.bool,
};

const mapStateToProps = store => ({
  email: store.Users.email,
  regSuccess: store.Users.regSuccess,
})

const mapDispatchToProps = {
  login,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);