import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="landing">
    <h1>Strive</h1>
    <h3>Do The Best You.</h3>
    <h3>What is your main goal for today?</h3>
    <Link to="/month">
      <h3>Enter</h3>
    </Link>
  </div>
);

export default Landing;
