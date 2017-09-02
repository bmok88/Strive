import React from 'react';
import PropTypes from 'prop-types';

const FoodLogDay = ({ date, handleDayChange }) => (
  <div className="foodDay">
    Showing food log for:
    <div id="date">
      <a
        role="button"
        tabIndex="0"
        onClick={e => handleDayChange(e, 'previous')}
      >
        <img
          src="http://img.freepik.com/free-icon/left-arrow-back-circular-button_318-67765.jpg?size=338&ext=jpg"
          height="40px"
          width="40px"
          alt="Previous Day"
        />
      </a>
      <span id="date-display">{date.toDateString()}</span>
      <a role="button" tabIndex="0" onClick={e => handleDayChange(e, 'next')}>
        <img
          src="https://image.flaticon.com/icons/svg/53/53579.svg"
          height="40px"
          width="40px"
          alt="Next Day"
        />
      </a>
    </div>
  </div>
);

FoodLogDay.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  handleDayChange: PropTypes.func.isRequired
};

export default FoodLogDay;
