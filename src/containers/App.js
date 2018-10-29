/* eslint-disable import/no-named-as-default */
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import ReviewPage from "./ReviewPage";
import NotFoundPage from "./NotFoundPage";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBook, faQuestionCircle, faLock, faUserPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import RegistrationPage from "./RegistrationPage";
import LoginPage from "./LoginPage";

library.add(faBook, faQuestionCircle, faLock, faUserPlus, faUser)

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/review" component={ReviewPage} />
          <Route exact path="/registration" component={RegistrationPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
