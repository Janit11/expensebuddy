// src/pages/ExpensePage.js
import React from 'react';
import {NavBar} from '../components/NavBar';
import ActivityBar from '../components/ActivityBar';
import ExpenseList from '../components/ExpenseList';

const ExpensePage = () => {
  return (
    <>
      <NavBar />
      <ActivityBar currentActivity="Expenses" />
      <ExpenseList />
    </>
  );
};

export default ExpensePage;
