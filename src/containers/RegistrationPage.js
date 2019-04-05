import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import { history } from '../store/configureStore';
import { regRequested } from '../actions/actions'
import RegistrationSheet from '../components/registration/RegistrationSheet';
import '../styles/styles.scss';
import UserBar from '../components/UserBar/UserBar';

export class RegistrationPage extends Component {


  register = () => {
    const name = document.querySelector("input[type='text']").value;
    const email = document.querySelector("input[type='email']").value;
    const password = document.querySelector("input[type='password']").value;
    this.props.regRequested({ email, password, name })
  }

  clearInputs = () => {
    document.querySelectorAll('input').forEach(input => input.value = '');
  }

  render() {
    const { regSuccess } = this.props;
    if (regSuccess) {
      this.clearInputs();
      window.alert('regisztráció sikeres');
      history.push('/');
    }

    return (
      <div id="registration-page">
        <div className="background"></div>
        <UserBar />
        <Header />
        <h1 className='title registration-title'>Regisztráció</h1>
        <RegistrationSheet
          onReg={this.register}
          regSuccess={regSuccess}
        />
        <Footer />
      </div>
    );
  }
}

RegistrationPage.propTypes = {
  regRequested: PropTypes.func.isRequired,
  regSuccess: PropTypes.bool
};

const mapStateToProps = (store) => ({
  regSuccess: store.User.regSuccess,
  regInProgress: store.User.regInProgress,
})

const mapDispatchToProps = {
  regRequested,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationPage);
