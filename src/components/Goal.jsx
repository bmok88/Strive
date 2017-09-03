import React from 'react';
import PropTypes from 'prop-types';

const Goal = ({ goal, goalId, handleEditGoal }) => (
  <td id="goal-column">
    <a role="button" tabIndex="0" onClick={e => handleEditGoal(e, 'goal')}>
      {goal}
    </a>
  </td>
);

Goal.propTypes = {
  goal: PropTypes.string.isRequired,
  goalId: PropTypes.number.isRequired,
  handleEditGoal: PropTypes.func.isRequired
};

export default Goal;

// <form
//               onSubmit={e => {
//                 handleEditGoal(e, goalId, 'goal');
//                 this.handleEditState('');
//               }}
//             >
//               <input type="text" />
//             </form>
