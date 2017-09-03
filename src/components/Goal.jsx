import React from 'react';
import PropTypes from 'prop-types';

const Goal = ({ goal, goalId, handleEdit, handleEditState, isEditingGoal }) => {
  if (!isEditingGoal) {
    return (
      <td id="goal-column">
        <a role="button" tabIndex="0" onClick={() => handleEditState('goal')}>
          {goal}
        </a>
      </td>
    );
  }

  return (
    <td>
      <form
        onSubmit={e => {
          handleEdit(e, goalId, e.target.children[0].value, 'goal');
          handleEditState('goal');
        }}
      >
        <input type="text" />
      </form>
    </td>
  );
};

Goal.propTypes = {
  goal: PropTypes.string.isRequired,
  goalId: PropTypes.number.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleEditState: PropTypes.func.isRequired,
  isEditingGoal: PropTypes.bool.isRequired
};

export default Goal;
