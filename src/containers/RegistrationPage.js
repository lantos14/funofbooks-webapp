import React, { Component } from 'react';
import { Header } from '../components/Header';
import { RegForm } from '../components/RegForm';
import { Footer } from '../components/Footer';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registration } from '../actions/actions'
import '../styles/RegistrationPage.scss';

export class RegistrationPage extends Component {
  state = {
    regSuccess: this.props.regSuccess,
  }

  render() {
    return (
      <div id='registration-page'>
        <div className="background"></div>
        <Header backgroundSource="https://bit.ly/2Qnl9Dz"/>
        <RegForm regAction={this.props.registration} regSuccess={this.state.regSuccess} />
        <Footer/>
      </div>
    )
  }
}

RegistrationPage.propTypes = {
  registration: PropTypes.func.isRequired,
  regSuccess: PropTypes.bool,
};

const mapStateToProps = store => ({
  email: store.Users.email,
  regSuccess: store.Users.regSuccess,
})

const mapDispatchToProps = {
  registration,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationPage);