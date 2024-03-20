// src/pages/ExpenseListPage.js
import React from 'react';
import { NavBar } from './components/NavBar';
import ActivityBar from '../components/ActivityBar';
import ExpenseList from '../components/ExpenseList';

const ExpenseListPage = () => {
  return (
    <>
      <NavBar />
      <ActivityBar currentActivity="Expense List" />
      <ExpenseList />
    </>
  );
};

export default ExpenseListPage;
