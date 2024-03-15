import React from "react";

import './App.css';


// NavBar component
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">ExpenseBuddy</div>
      <div className="menu-items">
        <a href="/">Dashboard</a>
        <a href="/expenses">Expenses</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

// Card component for displaying dashboard statistics
const StatCard = ({ icon, label, value }) => {
  return (
    <div className="stat-card">
      <div className="icon">{icon}</div>
      <div className="label">{label}</div>
      <div className="value">{value}</div>
    </div>
  );
};

// Dashboard component
const Dashboard = () => {
  // Dummy data for demonstration
  const stats = [
    { label: "Total Expenses", value: "$2,190" },
    { label: "Income", value: "$3,000" },
    { label: "Savings", value: "$810" },
  ];

  return (
    <div className="dashboard">
      <div className="stats">
        {stats.map((stat) => (
          <StatCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
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
    <div className="app">
      <NavBar />
      <main>
        <Dashboard />
        <ExpenseList />
        {/* Routes for other components */}
      </main>
    </div>
  );
};

export default App;
