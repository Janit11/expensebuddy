// src/components/ExpenseList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExpenseList = () => {
// Initialize the 'expenses' state with dummy data
  const [expenses, setExpenses] = useState([
    { id: 1, date: "2024-01-01", description: "Groceries", category: "Food", amount: "$50" },
    { id: 2, date: "2024-01-02", description: "Internet", category: "Utility", amount: "$60" },
    // ...other dummy data
  ]);

  useEffect(() => {
    // const fetchExpenses = async () => {
    //   try {
    //     const response = await axios.get(`/api/expenses`);
    //     // Check if response.data is an array before setting expenses
    //     if (Array.isArray(response.data)) {
    //       setExpenses(response.data);
    //     } else {
    //       // Handle the case where the data is not an array
    //       console.error('Data fetched is not an array:', response.data);
    //       setExpenses([]); // Reset expenses to an empty array
    //     }
    //   } catch (error) {
    //     console.error("Error fetching expenses", error);
    //     setExpenses([]); // Reset expenses to an empty array in case of error
    //   }
    // };
    // fetchExpenses();
  }, []);

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
            <tr key={expense.id}> {/* Replace index with a unique identifier */}
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

export default ExpenseList;
