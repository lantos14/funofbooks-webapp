import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../styles/styles.scss';
import 'bulma/css/bulma.css';

export class LinkButton extends Component {

  render() {
    return (
      <a target="_blank" href={this.props.link}>
      <div className="box" >
        <img src="../../images/github-icon.svg" width="32" height="24" />
      </div>
      </a>
    );
  }
}

LinkButton.propTypes = {
  link: PropTypes.string.isRequired,
};
