// src/pages/ExpensePage.js
import React from 'react';
import ActivityBar from '../components/ActivityBar';
import ExpenseList from '../components/ExpenseList';

const ExpensePage = () => {
  return (
    <>
      <ActivityBar currentActivity="Expenses" />
      <ExpenseList />
    </>
  );
};

export default ExpensePage;
