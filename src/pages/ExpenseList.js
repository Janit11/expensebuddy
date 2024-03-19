import axios from 'axios';

const ExpenseList = async () => {
    try {
      const response = await axios.get(`/api/expenses`);
      return response.data;
    } catch (error) {
      console.error("Error fetching expenses", error);
    }
  };
  

  export default ExpenseList; 