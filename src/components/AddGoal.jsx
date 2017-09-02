import React from 'react';
import PropTypes from 'prop-types';

import PriorityCheckboxes from './PriorityCheckboxes';

const AddGoal = ({ handleGoalSubmit }) => (
  <div className="addGoal">
    <form onSubmit={e => handleGoalSubmit(e)}>
      <textarea
        type="text"
        placeholder="Be specific and add a deadline"
        required
      />
      <PriorityCheckboxes />
      <input type="submit" />
    </form>
  </div>
);

AddGoal.propTypes = {
  handleGoalSubmit: PropTypes.func.isRequired
};

export default AddGoal;
