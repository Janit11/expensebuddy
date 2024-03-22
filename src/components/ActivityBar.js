import React from 'react';
import '../App.css';

const ActivityBar = ({ currentActivity }) => {
  return (
    <div className="activity-bar">
      <span>{currentActivity}</span>
    </div>
  );
};

export default ActivityBar;
