import React from 'react';

const Food = props => {
  console.log(props);
  const foodName = props.food_name;
  const servingSize = props.serving_weight_grams / props.serving_qty;
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

export default Food;
