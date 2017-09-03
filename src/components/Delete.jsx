import React from 'react';
import PropTypes from 'prop-types';

const Delete = ({ goalId, handleDelete }) => (
  <td>
    <button value="delete" onClick={e => handleDelete(e, goalId)}>
      Delete
    </button>
  </td>
);

Delete.propTypes = {
  goalId: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default Delete;
