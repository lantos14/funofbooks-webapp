import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/styles.scss';
import 'bulma/css/bulma.css';

const LinkButton = (props) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={props.link}>
      <div className="box link-button" />
    </a>
  );
}

LinkButton.propTypes = {
  link: PropTypes.string.isRequired,
};

export default LinkButton;
