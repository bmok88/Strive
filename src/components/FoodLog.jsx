import React from 'react';

const FoodLog = () => (
  <table>
    <thead>
      <tr>
        <th>Item</th>
        <th>Amount(g)</th>
        <th>Calories(g)</th>
        <th>Fat(g)</th>
        <th>Carbohydrates(g)</th>
        <th>Protein(g)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Avocado</td>
        <td>150</td>
        <td>200</td>
        <td>30</td>
        <td>8</td>
        <td>7</td>
      </tr>
    </tbody>
  </table>
);

export default FoodLog;
