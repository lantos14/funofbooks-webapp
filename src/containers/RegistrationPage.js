import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { connect } from 'react-redux';
import RegistrationSheet from '../components/registration/RegistrationSheet';

export class RegistrationPage extends Component {

  render() {
    return (
      <div id="registration-page">
        <div className="background"></div>
        <Header />
        <RegistrationSheet />
        <Footer />
      </div>
    );
  }
}

RegistrationPage.propTypes = {
};

const mapStateToProps = () => ({
})

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationPage);
