import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { NavBar } from './components/NavBar';
import ActivityBar from './components/ActivityBar';
import ExpenseList from './ExpenseList'; 
import Login from './Login'; 
import ExpensePage from './pages/ExpensePage';


const StatCard = ({ icon, label, value, onClick }) => {
  return (
    <button onClick={onClick} className="stat-card">
      <div className="icon">{icon}</div>
      <div className="label">{label}</div>
      <div className="value">{value}</div>
    </button>
  );
};

const Dashboard = () => {
  // Function to handle clicks on stat cards
  const handleStatCardClick = (label) => {
    console.log(`${label} card clicked`);
    // Here you can handle navigation or modal pop-up based on the label
  };

  // Dummy data for demonstration
  const stats = [
    { icon: <FaHome />, label: "Total Money", value: "$3,000", onClick: () => handleStatCardClick("Total Money") }, 
    { icon: <FaListAlt />, label: "Manage Money", value: "Transfer/Remove Money", onClick: () => handleStatCardClick("Manage Money") }, // customer can manage money and make a list on where to spend using categories/note.
    { icon: <FaSignInAlt />, label: "Expense List", value: "5 transactions", onClick: () => handleStatCardClick("Expense List") }, // add and reset transaction list
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
            onClick={stat.onClick}
          />
        ))}
      </div>
    </div>
  );
};


// Main App component
const App = () => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={
            <>
              <ActivityBar currentActivity="Dashboard" />
              <Dashboard />
            </>
          } />
          <Route path="/expenses" element={
            <>
              <ActivityBar currentActivity="Expenses" />
              <ExpenseList />
            </>
          } />
          <Route path="/login" element={
            <>
              <ActivityBar currentActivity="Login" />
              <Login />
            </>
          } />
          <Route path="/expenses" element={<ExpensePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
