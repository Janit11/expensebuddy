import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const ActivityBar = ({ currentActivity }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="activity-bar">
      <button onClick={goBack} className="back-button">
        <FaArrowLeft/>
      </button>
      <span>{currentActivity}</span>
    </div>
  );
};

export default ActivityBar;
