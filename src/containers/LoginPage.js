import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import { history } from '../store/configureStore';
import { loginRequested } from '../actions/actions'
import LoginSheet from '../components/Login/LoginSheet';

export class LoginPage extends Component {

  login = () => {
    const email = document.querySelector("input[type='email']").value;
    const password = document.querySelector("input[type='password']").value;
    this.props.loginRequested({ email, password })
  }

  clearInputs = () => {
    document.querySelectorAll('input').forEach(input => input.value = '');
  }

  render() {
    const { loginSuccess } = this.props;
    if (loginSuccess) {
      this.clearInputs();
      window.alert('bejelentkezés sikeres');
      history.push('/');
    }
    return (
      <div id="registration-page">
        <div className="background"></div>
        <Header />
        <LoginSheet
          onLogin={this.login}
        />
        <Footer />
      </div>
    );
  }
}

LoginPage.propTypes = {
  loginRequested: PropTypes.func.isRequired,
  loginSuccess: PropTypes.bool,
  email: PropTypes.string,
};

const mapStateToProps = (store) => ({
  email: store.User.email,
  loginSuccess: store.User.loginSuccess,
})

const mapDispatchToProps = {
  loginRequested,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
