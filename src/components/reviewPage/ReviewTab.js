import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../styles/styles.scss';
import 'bulma/css/bulma.css';

export class ReviewTab extends Component {

  render() {
    return (
      <div className="tabs is-boxed">
        <ul>

          <li className="tab is-active"
            id='no-spoiler'
            onClick={this.props.handleChange}>
            <a>Spoilermentes</a>
          </li>

          <li className="tab"
            id='spoiler'
            onClick={this.props.handleChange}>
            <a>Spoileres</a>
          </li>

        </ul>
      </div>
    );
  }
}

ReviewTab.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
