import React from 'react';
import PropTypes from 'prop-types';

const Totals = props => (
  <tr>
    <td>
      <strong>Totals</strong>
    </td>
    <td>{props.totalAmount}</td>
    <td>{props.totalCalories}</td>
    <td>{props.totalFat}</td>
    <td>{props.totalCarbs}</td>
    <td>{props.totalProtein}</td>
  </tr>
);

Totals.propTypes = {
  totalAmount: PropTypes.number.isRequired,
  totalCalories: PropTypes.number.isRequired,
  totalFat: PropTypes.number.isRequired,
  totalCarbs: PropTypes.number.isRequired,
  totalProtein: PropTypes.number.isRequired
};

export default Totals;
