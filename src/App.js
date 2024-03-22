// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import {NavBar} from './components/NavBar';
import ActivityBar from './components/ActivityBar';
import Dashboard from './components/Dashboard'; 
import ExpensePage from './pages/ExpensePage'; 
import ManageMoneyPage from './pages/ManageMoneyPage';
import TotalMoneyPage from './pages/TotalMoneyPage';
import Login from './components/Login'; 
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
          <Route path="/manage-money" element={<ManageMoneyPage />} />
          <Route path="/total-money" element={<TotalMoneyPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
