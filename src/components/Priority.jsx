import React from 'react';
import PropTypes from 'prop-types';

const Priority = ({
  priority,
  goalId,
  handleEdit,
  handleEditState,
  isEditingPriority
}) => {
  if (!isEditingPriority) {
    return (
      <td>
        <a
          role="button"
          tabIndex="0"
          onClick={() => handleEditState('priority')}
        >
          {priority}
        </a>
      </td>
    );
  }

  return (
    <td>
      <select
        onChange={e => {
          handleEdit(e, goalId, e.target.value, 'priority');
          handleEditState('priority');
        }}
      >
        <option disabled selected value>
          {' '}
          -- select an option --{' '}
        </option>
        <option value="High">High</option>
        <option value="Mid">Mid</option>
        <option value="Low">Low</option>
      </select>
    </td>
  );
};

Priority.propTypes = {
  priority: PropTypes.string.isRequired,
  goalId: PropTypes.number.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleEditState: PropTypes.func.isRequired,
  isEditingPriority: PropTypes.bool.isRequired
};

export default Priority;

// <input type="text" />
// <form
//               onSubmit={e => {
//                 handleEditGoal(e, goalId, 'priority');
//                 this.handleEditState('');
//               }}
//             >
//               <input type="text" />
//             </form>
