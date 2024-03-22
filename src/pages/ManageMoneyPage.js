import React from 'react';
import ActivityBar from '../components/ActivityBar';
import ManageMoney from '../components/ManageMoney';
  
const ManageMoneyPage = () => {
    return (
      <>
        <ActivityBar currentActivity="Manage Money" />
        <ManageMoney />
      </>
    );
  };
  
  export default ManageMoneyPage;
