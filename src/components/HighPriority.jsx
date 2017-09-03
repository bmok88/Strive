import React from 'react';
import PropTypes from 'prop-types';

const HighPriority = ({ handleFilter }) => (
  <a href="#" role="button" tabIndex="0" onClick={e => handleFilter(e, 'high')}>
    High
  </a>
);

HighPriority.propTypes = {
  handleFilter: PropTypes.func.isRequired
};

export default HighPriority;
