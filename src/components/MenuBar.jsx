import React from 'react';
import PropTypes from 'prop-types';

const MenuBar = ({ chooseDisplay }) => (
  <ul className="menubar">
    <li>
      <a role="menuitem" tabIndex="0" onClick={e => chooseDisplay(e)}>
        Goals
      </a>
    </li>
    <li>
      <a role="menuitem" tabIndex="0" onClick={e => chooseDisplay(e)}>
        Food Log
      </a>
    </li>
    <li>
      <a role="menuitem" tabIndex="0" onClick={e => chooseDisplay(e)}>
        Workout Tracker
      </a>
    </li>
  </ul>
);

MenuBar.propTypes = {
  chooseDisplay: PropTypes.func.isRequired
};

export default MenuBar;
