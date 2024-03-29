import React from 'react';
import { FaHome, FaListAlt, FaSignInAlt } from 'react-icons/fa';
import StatCard from './StatCard';

const Dashboard = () => {
  // Dummy data for demonstration
  const stats = [
    { icon: <FaHome />, label: "Total Money", value: "$3,000", to: "/total-money" },
    { icon: <FaListAlt />, label: "Manage Money", value: "See how you spend", to: "/manage-money" },
    { icon: <FaSignInAlt />, label: "Expense List", value: "2 transactions", to: "/expenses" },
  ];

  return (
    <div className="dashboard">
      <div className="stats">
        {stats.map((stat) => (
          <StatCard
            key={stat.label}
            icon={stat.icon}
            label={stat.label}
            value={stat.value}
            to={stat.to}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
