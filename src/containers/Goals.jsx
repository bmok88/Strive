import React, { Component } from 'react';

import AddGoal from '../components/AddGoal';
import Goal from '../components/Goal';
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
    console.log('goalId', goalId);
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

  render() {
    return (
      <div>
        <AddGoal handleGoalSubmit={this.handleGoalSubmit} />
        <table id="goalTable">
          <GoalTableHeaders />
          <tbody>
            {this.state.goals.map(goal => {
              return (
                <Goal
                  key={goal.goalId}
                  {...goal}
                  handleGoalComplete={this.handleGoalComplete}
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
