import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Achieved from '../components/Achieved';
import Delete from '../components/Delete';
import Goal from '../components/Goal';
import Priority from '../components/Priority';

class GoalRow extends Component {
  state = {
    isEditing: 'false',
    which: ''
  };

  render() {
    const {
      achieved,
      goal,
      goalId,
      handleGoalComplete,
      handleEditGoal,
      priority
    } = this.props;

    return (
      <tr
        className="goalRow"
        style={{ textDecoration: !achieved ? 'none' : 'line-through' }}
      >
        <Goal goal={goal} goalId={goalId} handleEditGoal={handleEditGoal} />
        <Priority
          priority={priority}
          goalId={goalId}
          handleEditGoal={handleEditGoal}
        />
        <Achieved
          achieved={achieved}
          goalId={goalId}
          handleGoalComplete={handleGoalComplete}
        />
        <Delete />
      </tr>
    );
  }
}

GoalRow.propTypes = {
  goalId: PropTypes.number.isRequired,
  goal: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  achieved: PropTypes.bool.isRequired,
  handleGoalComplete: PropTypes.func.isRequired,
  handleEditGoal: PropTypes.func.isRequired
};

export default GoalRow;
// handleEditState = column => {
//   // this.setState({
//   //   isEditing: !this.state.isEditing,
//   //   which: column
//   // });
// };
// handleEditClick = () => {
//   const { handleEditGoal, goal, goalId, priority } = this.props;
//   console.log(this.state.isEditing, 'editing?');
//   if (!this.state.isEditing) {
//     return (

//         <td id="goal-column">
//           <a
//             role="button"
//             tabIndex="0"
//             onClick={this.handleEditState('goal')}
//           >
//             {goal}
//           </a>
//         </td>
//         <td>
//           <a
//             role="button"
//             tabIndex="0"
//             onClick={this.handleEditState('priority')}
//           >
//             {priority}
//           </a>
//         </td>

//     );
//   }

//   if (this.state.which === 'goal') {
//     return (
//       <div>
//         <td id="goal-column">
//           <form
//             onSubmit={e => {
//               handleEditGoal(e, goalId, 'goal');
//               this.handleEditState('');
//             }}
//           >
//             <input type="text" />
//           </form>
//         </td>
//         <td>
//           <a
//             role="button"
//             tabIndex="0"
//             onClick={this.handleEditState('priority')}
//           >
//             {priority}
//           </a>
//         </td>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <td id="goal-column">
//           <a
//             role="button"
//             tabIndex="0"
//             onClick={this.handleEditState('goal')}
//           >
//             {goal}
//           </a>
//         </td>
//         <td>
//           <form
//             onSubmit={e => {
//               handleEditGoal(e, goalId, 'priority');
//               this.handleEditState('');
//             }}
//           >
//             <input type="text" />
//           </form>
//         </td>
//       </div>
//     );
//   }
// };
