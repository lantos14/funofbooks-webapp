import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { history } from '../../store/configureStore';
import '../../styles/styles.scss';
import 'bulma/css/bulma.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class SideButton extends Component {

  handleOnClick = () => {
    history.push(this.props.url);
  }

  render() {
    return (
      <div className="box" onClick={this.handleOnClick}>
        <article className="media">
          <div className="media-left">
            <i className={`fas fa-${this.props.icon}`}></i>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                {
                  (this.props.text === 'Bejelentkezés' && this.props.user) ?
                    this.props.user
                    :
                    this.props.text
                }
              </p>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

SideButton.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  user: PropTypes.string
};
