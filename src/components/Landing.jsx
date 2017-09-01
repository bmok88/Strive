import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="landing">
    <h1>Strive</h1>
    <h3>You Do The Best You.</h3>
    <h3>What is your goal for today?</h3>
    <Link to="/home">
      <h3>Enter</h3>
    </Link>
  </div>
);

export default Landing;
