import React from 'react';
import 'bulma/css/bulma.css';
import PropTypes from "prop-types";

const UserBar = (props) => {
  return (
    <div className='user-bar'>
      {
        (!props.email) ?
          <p>nem vagy bejelentkezve</p>
          :
          <div className="user-data">
            <p>e-mail: {props.email}</p>
          </div>
      }
    </div>

  );
}

UserBar.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
};

export default UserBar;