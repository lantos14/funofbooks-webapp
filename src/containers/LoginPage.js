import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import LoginSheet from '../components/registration/LoginSheet';

export class LoginPage extends Component {

  render() {
    return (
      <div id="registration-page">
        <div className="background"></div>
        <Header />
        <LoginSheet />
        <Footer />
      </div>
    );
  }
}

LoginPage.propTypes = {
};

const mapStateToProps = () => ({
})

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
