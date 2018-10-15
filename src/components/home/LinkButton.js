import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../styles/styles.scss';
import 'bulma/css/bulma.css';

export class LinkButton extends Component {

  render() {
    return (
      <a target="_blank" rel="noopener noreferrer" href={this.props.link}>
      <div className="box link-button"></div>
      </a>
    );
  }
}

LinkButton.propTypes = {
  link: PropTypes.string.isRequired,
};
