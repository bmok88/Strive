import React from 'react';
import PropTypes from 'prop-types';

const Achieved = ({ achieved, goalId, handleGoalComplete }) => (
  <td>
    <a role="button" tabIndex="0" onClick={e => handleGoalComplete(e, goalId)}>
      {!achieved ? 'Not yet' : 'Yes!'}
    </a>
  </td>
);

Achieved.propTypes = {
  achieved: PropTypes.bool.isRequired,
  goalId: PropTypes.number.isRequired,
  handleGoalComplete: PropTypes.func.isRequired
};

export default Achieved;
