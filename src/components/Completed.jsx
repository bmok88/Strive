import React from 'react';
import PropTypes from 'prop-types';

const Completed = ({ handleFilter }) => (
  <a
    href="#"
    role="button"
    tabIndex="0"
    onClick={e => handleFilter(e, 'Completed')}
  >
    Completed
  </a>
);

Completed.propTypes = {
  handleFilter: PropTypes.func.isRequired
};

export default Completed;
