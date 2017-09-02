import React from 'react';
import PropTypes from 'prop-types';

const FoodLogDay = ({ date }) => (
  <div className="foodDay">
    Showing food log for:
    <div id="date">
      <a>
        <img
          src="http://img.freepik.com/free-icon/left-arrow-back-circular-button_318-67765.jpg?size=338&ext=jpg"
          height="40px"
          width="40px"
          alt="Previous Day"
        />
      </a>
      {date}
      <a>
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
  date: PropTypes.string.isRequired
};

export default FoodLogDay;
