import React from 'react';
import PropTypes from 'prop-types';

const All = ({ handleFilter }) => (
  <a role="button" tabIndex="0" onClick={e => handleFilter(e, 'All')}>
    All
  </a>
);

All.propTypes = {
  handleFilter: PropTypes.func.isRequired
};

export default All;
