import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { FaHome, FaListAlt, FaSignInAlt } from 'react-icons/fa'; // Importing icons from react-icons

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">ExpenseBuddy</div>
      <div className="menu-items">
        <a href="/login"><FaSignInAlt /> Login</a>
      </div>
    </nav>
  );
};


const ActivityBar = ({ currentActivity }) => {
  return (
    <div className="activity-bar">
      <span>{currentActivity}</span>
    </div>
  );
};


// Card component for displaying dashboard statistics
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

// ExpenseList component
const ExpenseList = () => {
  // Dummy data for demonstration
  const expenses = [
    { date: "2024-03-15", description: "Groceries", category: "Food", amount: "$50" },
    // ... other expenses
  ];

  return (
    <div className="expense-list">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.description}>
              <td>{expense.date}</td>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>{expense.amount}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Login component
const Login = () => {
  return (
    <div className="login-form">
      {/* Form elements go here */}
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
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
