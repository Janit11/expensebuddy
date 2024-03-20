// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import {NavBar} from './components/NavBar';
import ActivityBar from './components/ActivityBar';
import Dashboard from './components/Dashboard'; // Adjust this import if necessary
import ExpensePage from './pages/ExpensePage'; // Adjust this import if necessary
import Login from './components/Login'; // Adjust this import if necessary

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
          <Route path="/login" element={
            <>
              <ActivityBar currentActivity="Login" />
              <Login />
            </>
          } />
          <Route path="/expenses" element={<ExpensePage />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
