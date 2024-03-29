import React from 'react';

const TotalMoney = () => {
  const totalAmount = "$3,000"; // This can be dynamic if needed

  return (
      <div className="total-money-container">
        <div className="total-money-box">
          <h1>Total Money</h1>
          <p className="total-amount">{totalAmount}</p>
        </div>
        <div className="add-remove-money">
          <h1>Add/Remove Money</h1>
          <p className="add-remove"></p>
        </div>
      </div>
  );
};

export default TotalMoney;
