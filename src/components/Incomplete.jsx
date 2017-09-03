import React from 'react';
import PropTypes from 'prop-types';

const Incomplete = ({ handleFilter }) => (
  <a role="button" tabIndex="0" onClick={e => handleFilter(e, 'Incomplete')}>
    Incomplete
  </a>
);

Incomplete.propTypes = {
  handleFilter: PropTypes.func.isRequired
};

export default Incomplete;
