import React, { Component } from 'react';
import { Header } from '../components/Header';
import { RegForm } from '../components/RegForm';
import { Footer } from '../components/Footer';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registration } from '../actions/actions'
import '../styles/RegistrationPage.scss';

export class RegistrationPage extends Component {
  state = {}

  render() {
    return (
      <div id='registration-page'>
        <div className="background"></div>
        <Header backgroundSource="https://bit.ly/2Qnl9Dz"/>
        <RegForm regAction={this.props.registration}/>
        <Footer/>
      </div>
    )
  }
}

RegistrationPage.propTypes = {
  registration: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  email: store.Users.email,
})

const mapDispatchToProps = {
  registration,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationPage);