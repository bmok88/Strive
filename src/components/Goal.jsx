import React from 'react';
import PropTypes from 'prop-types';

const Goal = ({
  goal,
  goalId,
  handleEditGoal,
  handleEditState,
  isEditingGoal
}) => {
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
          handleEditGoal(e, goalId, this.input.value);
          handleEditState('goal');
        }}
      >
        <input type="text" ref={node => (this.input = node)} />
      </form>
    </td>
  );
};

Goal.propTypes = {
  goal: PropTypes.string.isRequired,
  goalId: PropTypes.number.isRequired,
  handleEditGoal: PropTypes.func.isRequired,
  handleEditState: PropTypes.func.isRequired,
  isEditingGoal: PropTypes.bool.isRequired
};

export default Goal;
