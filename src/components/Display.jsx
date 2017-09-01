import React from 'react';
import PropTypes from 'prop-types';

import Goals from './Goals';
import FoodLog from '../containers/FoodLog';
import WorkoutTracker from './WorkoutTracker';

const Display = ({ display }) => {
  let showDisplay;

  if (display === 'Goals') {
    showDisplay = <Goals />;
  } else if (display === 'Food Log') {
    showDisplay = <FoodLog />;
  } else if (display === 'Workout Tracker') {
    showDisplay = <WorkoutTracker />;
  }

  return <div className="showDisplay">{showDisplay}</div>;
};

Display.propTypes = {
  display: PropTypes.string.isRequired
};

export default Display;
