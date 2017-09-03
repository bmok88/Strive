import React from 'react';
import PropTypes from 'prop-types';

const MidPriority = ({ handleFilter }) => (
  <a role="button" tabIndex="0" onClick={e => handleFilter(e, 'mid')}>
    Mid
  </a>
);

MidPriority.propTypes = {
  handleFilter: PropTypes.func.isRequired
};

export default MidPriority;
