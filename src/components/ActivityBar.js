// src/components/ActivityBar.js
import React from 'react';
import '../App.css'; // Import the CSS if needed in ActivityBar

const ActivityBar = ({ currentActivity }) => {
  return (
    <div className="activity-bar">
      <span>{currentActivity}</span>
    </div>
  );
};

export default ActivityBar;
