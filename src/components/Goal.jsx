import React from 'react';
import PropTypes from 'prop-types';

const Goal = ({ goalId, goal, priority, achieved, handleGoalComplete }) => (
  <tr
    className="goalRow"
    style={{ 'text-decoration': !achieved ? 'none' : 'line-through' }}
  >
    <td id="goal-column">{goal}</td>
    <td>{priority}</td>
    <td>
      <a
        role="button"
        tabIndex="0"
        onClick={e => handleGoalComplete(e, goalId)}
      >
        {!achieved ? 'Not yet' : 'Yes!'}
      </a>
    </td>
    <td>edit/delete</td>
  </tr>
);

Goal.propTypes = {
  goalId: PropTypes.number.isRequired,
  goal: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  achieved: PropTypes.bool.isRequired,
  handleGoalComplete: PropTypes.func.isRequired
};

export default Goal;
