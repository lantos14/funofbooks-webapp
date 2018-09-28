import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import history from '../history';
import '../../styles/styles.scss';
import 'bulma/css/bulma.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class SideButton extends Component {
  
  handleOnClick = () => {
    // history.push('/overview');
  }

  render() {
    return (
      <div className="box" onClick={this.handleOnClick}>
        <article className="media">
          <div className="media-left">
            <FontAwesomeIcon className="is-medium" icon={this.props.icon}/>
          </div>
          <div className="media-content">
            <div className="content">
              <p>{this.props.text}</p>
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
};
