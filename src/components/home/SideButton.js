import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { history } from '../../store/configureStore';
import '../../styles/styles.scss';
import 'bulma/css/bulma.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class SideButton extends Component {

  handleOnClick = () => {
    history.push('/');
  }

  render() {
    return (
      <div className="box" onClick={this.props.custom ? null : this.handleOnClick}>
        <article className="media">

          <div className="media-left">

            {this.props.custom ?
              <a href="https://github.com/lantos14/funofbooks-webapp">
                <img src="../../images/github-icon.svg" alt="github icon" height="36" width="24" />
              </a>
              : <FontAwesomeIcon className="is-medium" icon={this.props.icon} />}

          </div>

          {this.props.text !== "" ?

            <div className="media-content">
              <div className="content">
                <p>{this.props.text}</p>
              </div>
            </div>
            : null}

        </article>
      </div>
    );
  }
}

SideButton.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  custom: PropTypes.bool,
};

SideButton.defaultProps = {
  custom: false,
}
