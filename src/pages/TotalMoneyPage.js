import React from 'react';
import ActivityBar from '../components/ActivityBar';
import TotalMoney from '../components/TotalMoney';

const TotalMoneyPage = () => {
  return (
    <>
      <ActivityBar currentActivity="Total Money" />
      <TotalMoney />
    </>
  );
};

export default TotalMoneyPage;
