import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Achieved from '../components/Achieved';
import Delete from '../components/Delete';
import Goal from '../components/Goal';
import Priority from '../components/Priority';

class GoalRow extends Component {
  state = {
    isEditingGoal: false,
    isEditingPriority: false
  };

  handleEditState = col => {
    if (col === 'goal') {
      this.setState({
        isEditingGoal: !this.state.isEditingGoal
      });
    } else {
      this.setState({
        isEditingPriority: !this.state.isEditingPriority
      });
    }
  };

  render() {
    const {
      achieved,
      goal,
      goalId,
      handleGoalComplete,
      handleEdit,
      priority,
      handleDelete
    } = this.props;

    return (
      <tr
        className="goalRow"
        style={{ textDecoration: !achieved ? 'none' : 'line-through' }}
      >
        <Goal
          goal={goal}
          goalId={goalId}
          handleEdit={handleEdit}
          handleEditState={this.handleEditState}
          isEditingGoal={this.state.isEditingGoal}
        />
        <Priority
          priority={priority}
          goalId={goalId}
          handleEdit={handleEdit}
          handleEditState={this.handleEditState}
          isEditingPriority={this.state.isEditingPriority}
        />
        <Achieved
          achieved={achieved}
          goalId={goalId}
          handleGoalComplete={handleGoalComplete}
        />
        <Delete goalId={goalId} handleDelete={handleDelete} />
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
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default GoalRow;
