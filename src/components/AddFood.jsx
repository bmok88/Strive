import React from 'react';
import PropTypes from 'prop-types';

const AddFood = ({ handleFoodSubmit }) => (
  <div className="addFood">
    <form onSubmit={e => handleFoodSubmit(e)}>
      <input type="text" placeholder="Enter what you ate" required />
      <input type="text" placeholder="How much did you eat?" required />
      <input type="submit" />
    </form>
  </div>
);

AddFood.propTypes = {
  handleFoodSubmit: PropTypes.func.isRequired
};

export default AddFood;
