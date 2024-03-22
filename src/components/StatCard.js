import React from 'react';
import { useNavigate } from 'react-router-dom';

const StatCard = ({ icon, label, value, to }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(to);
  };

  return (
    <button onClick={handleClick} className="stat-card">
      <div className="icon">{icon}</div>
      <div className="label">{label}</div>
      <div className="value">{value}</div>
    </button>
  );
};

export default StatCard;
