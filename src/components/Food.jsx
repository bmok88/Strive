import React from 'react';
import PropTypes from 'prop-types';

const Food = props => {
  const foodName = props.food_name;
  const amount = props.serving_weight_grams;
  const calories = props.nf_calories;
  const totalFat = props.nf_total_fat;
  const carbs = props.nf_total_carbohydrate;
  const protein = props.nf_protein;

  return (
    <tr>
      <td>{foodName}</td>
      <td>{amount}</td>
      <td>{calories}</td>
      <td>{totalFat}</td>
      <td>{carbs}</td>
      <td>{protein}</td>
    </tr>
  );
};

Food.propTypes = {
  food_name: PropTypes.string.isRequired,
  serving_weight_grams: PropTypes.number.isRequired,
  nf_calories: PropTypes.number.isRequired,
  nf_total_fat: PropTypes.number.isRequired,
  nf_total_carbohydrate: PropTypes.number.isRequired,
  nf_protein: PropTypes.number.isRequired
};

export default Food;
