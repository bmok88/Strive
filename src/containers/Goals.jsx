import React, { Component } from 'react';

import AddGoal from '../components/AddGoal';
import GoalRow from './GoalRow';
import GoalTableHeaders from '../components/GoalTableHeaders';
import FooterFilters from '../components/FooterFilters';

class Goals extends Component {
  state = {
    goals: [],
    goalId: 0,
    visibleGoals: []
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
      goals: [...this.state.goals, newGoal],
      visibleGoals: [...this.state.visibleGoals, newGoal]
    });
    e.target.children[0].value = '';
  };

  handleGoalComplete = (e, goalId) => {
    e.preventDefault();
    const completedGoals = this.state.goals.map(goal => {
      if (goalId === goal.goalId) {
        /* eslint-disable */
        goal.achieved = !goal.achieved;
        /* eslint-enable */
      }

      return goal;
    });
    this.setState({
      goals: completedGoals
    });
  };

  handleEdit = (e, goalId, edit, col) => {
    e.preventDefault();
    const editedGoals = this.state.goals.map(goal => {
      if (goalId === goal.goalId) {
        /* eslint-disable */
        if (col === 'priority') {
          goal[col] = edit.toLowerCase();
        } else {
          goal[col] = edit;
          /* eslint-enable */
        }
      }

      return goal;
    });
    this.setState({
      goals: editedGoals,
      visibleGoals: editedGoals
    });
  };

  handleFilter = (e, filterTerm) => {
    e.preventDefault();
    const goals = this.state.goals;
    let filteredGoals;

    if (filterTerm === 'All') {
      filteredGoals = goals.filter(goal => goal);
    } else if (filterTerm === 'Completed') {
      filteredGoals = goals.filter(goal => goal.achieved);
    } else if (filterTerm === 'Incomplete') {
      filteredGoals = goals.filter(goal => !goal.achieved);
    } else if (filterTerm === 'high') {
      filteredGoals = goals.filter(goal => goal.priority === 'high');
    } else if (filterTerm === 'mid') {
      filteredGoals = goals.filter(goal => goal.priority === 'mid');
    } else {
      filteredGoals = goals.filter(goal => goal.priority === 'low');
    }

    this.setState({
      visibleGoals: filteredGoals
    });
  };

  handleDelete = (e, goalId) => {
    e.preventDefault();
    const nonDeletedGoals = this.state.goals.filter(
      goal => goal.goalId !== goalId
    );
    this.setState({
      goals: nonDeletedGoals,
      visibleGoals: nonDeletedGoals
    });
  };

  render() {
    return (
      <div>
        <AddGoal handleGoalSubmit={this.handleGoalSubmit} />
        <table id="goalTable">
          <GoalTableHeaders />
          <tbody>
            {this.state.visibleGoals.map(goal => (
              <GoalRow
                key={goal.goalId}
                {...goal}
                handleGoalComplete={this.handleGoalComplete}
                handleEdit={this.handleEdit}
                handleDelete={this.handleDelete}
              />
            ))}
          </tbody>
        </table>
        <FooterFilters handleFilter={this.handleFilter} />
      </div>
    );
  }
}

export default Goals;
