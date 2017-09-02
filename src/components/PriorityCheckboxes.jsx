import React from 'react';

const PriorityCheckboxes = () => (
  <div id="checkboxes">
    Priority:
    <br />
    <input type="radio" name="priority" id="priorityChoice1" value="high" />High
    <input type="radio" name="priority" id="priorityChoice2" value="mid" />Mid
    <input type="radio" name="priority" id="priorityChoice3" value="low" />Low
  </div>
);

export default PriorityCheckboxes;
