import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import { loginRequested } from '../actions/actions'
import RegistrationSheet from '../components/registration/RegistrationSheet';

export class RegistrationPage extends Component {

  login = () => {
    const email = document.querySelector("input[type='email']").value;
    const pwd = document.querySelector("input[type='password']").value;
    this.props.loginRequested({ email, pwd })
  }

  render() {
    return (
      <div id="registration-page">
        <div className="background"></div>
        <Header />
        <RegistrationSheet onLogin={this.login}/>
        <Footer />
      </div>
    );
  }
}

RegistrationPage.propTypes = {
  loginRequested: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({
})

const mapDispatchToProps = {
  loginRequested,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationPage);
