import React, { Component } from 'react';

import AddGoal from '../components/AddGoal';
import GoalRow from './GoalRow';
import GoalTableHeaders from '../components/GoalTableHeaders';

class Goals extends Component {
  state = {
    goals: [],
    goalId: 0
  };

  handleGoalSubmit = e => {
    e.preventDefault();
    const goal = e.target.children[0].value;
    const priority = document.querySelector('input[name="priority"]:checked')
      .value;
    const goalId = this.state.goalId + 1;
    const newGoal = {
      goalId,
      goal,
      priority,
      achieved: false
    };

    this.setState({
      goalId,
      goals: [...this.state.goals, newGoal]
    });
  };

  handleGoalComplete = (e, goalId) => {
    e.preventDefault();

    const completedGoals = this.state.goals.map(goal => {
      // console.log('goalId', goal);
      if (goalId === goal.goalId) {
        goal.achieved = !goal.achieved;
      }

      return goal;
    });
    this.setState({
      goals: completedGoals
    });
  };

  handleEditGoal = (e, goalId, edit) => {
    e.preventDefault();
    console.log(this.state.goals, 'state goals');
    const editedGoals = this.state.goals.map(goal => {
      if (goalId === goal.goalId) {
        goal.goal = edit;
      }

      return goal;
    });
    this.setState({
      goals: editedGoals
    });
  };

  render() {
    return (
      <div>
        <AddGoal handleGoalSubmit={this.handleGoalSubmit} />
        <table id="goalTable">
          <GoalTableHeaders />
          <tbody>
            {this.state.goals.map(goal => {
              return (
                <GoalRow
                  key={goal.goalId}
                  {...goal}
                  handleGoalComplete={this.handleGoalComplete}
                  handleEditGoal={this.handleEditGoal}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Goals;
