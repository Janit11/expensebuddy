// src/pages/ManageMoneyPage.js
import React, { useState } from 'react';
import ActivityBar from '../components/ActivityBar'; // Make sure you have this component created
import NavBar from '../components/NavBar'; // Make sure you have this component created

const ManageMoney = () => {
  // State for categories, notes, and total budget
  const [categories, setCategories] = useState([
    { id: 1, name: "Groceries", budget: 300 },
    { id: 2, name: "Utilities", budget: 150 },
    // Add more categories as needed
  ]);
  const [notes, setNotes] = useState('');
  const totalBudget = 1500; // Total budget for the month

  // Handlers for categories and notes
  const handleAddCategory = (category) => {
    setCategories(currentCategories => [...currentCategories, category]);
  };

  const handleNoteChange = (event) => {
    setNotes(event.target.value);
  };

  return (
    <>
      <div className="manage-money">
        {/* Total Budget Section */}
        <div className="total-budget-section">
          <h2>Total Budget for this Month: ${totalBudget}</h2>
        </div>

        {/* Categories Section */}
        <div className="categories-section">
          <h2>Categories</h2>
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Budget</th>
              </tr>
            </thead>
            <tbody>
              {categories.map(category => (
                <tr key={category.id}>
                  <td>{category.name}</td>
                  <td>${category.budget}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Notes Section */}
        <div className="notes-section">
          <h2>Notes</h2>
          <textarea value={notes} onChange={handleNoteChange} placeholder="Enter your notes here" />
        </div>
      </div>
    </>
  );
};

export default ManageMoney;
