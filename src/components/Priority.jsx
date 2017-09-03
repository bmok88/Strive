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
      <form
        onSubmit={e => {
          handleEdit(e, goalId, e.target.children[0].value, 'priority');
          handleEditState('priority');
        }}
      >
        <input type="text" />
      </form>
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

// <form
//               onSubmit={e => {
//                 handleEditGoal(e, goalId, 'priority');
//                 this.handleEditState('');
//               }}
//             >
//               <input type="text" />
//             </form>
