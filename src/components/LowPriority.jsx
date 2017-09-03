import React from 'react';
import PropTypes from 'prop-types';

const LowPriority = ({ handleFilter }) => (
  <a href="#" role="button" tabIndex="0" onClick={e => handleFilter(e, 'low')}>
    Low
  </a>
);

LowPriority.propTypes = {
  handleFilter: PropTypes.func.isRequired
};

export default LowPriority;
