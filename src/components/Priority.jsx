import React from 'react';
import PropTypes from 'prop-types';

const Priority = ({ priority, goalId, handleEditGoal }) => (
  <td>
    <a role="button" tabIndex="0" onClick={e => handleEditGoal(e, 'priority')}>
      {priority}
    </a>
  </td>
);

Priority.propTypes = {
  priority: PropTypes.string.isRequired,
  goalId: PropTypes.number.isRequired,
  handleEditGoal: PropTypes.func.isRequired
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
