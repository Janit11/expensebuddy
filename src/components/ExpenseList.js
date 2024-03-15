import axios from 'axios';

const getExpenses = async () => {
    try {
      const response = await axios.get('/api/expenses');
      return response.data;
    } catch (error) {
      console.error("Error fetching expenses", error);
    }
  };
  