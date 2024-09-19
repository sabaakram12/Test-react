
import React, { useState } from 'react';
import axios from 'axios';





const ExpenseSubmission = () => {
  const [expenseAmount, setExpenseAmount] = useState('');
  const [description, setDescription] = useState('');







  const handleSubmitExpense = () => {
    axios.post('/api/expenses', { amount: expenseAmount, description })
      .then(response => {
        alert('Expense submitted successfully');
        setExpenseAmount('');
        setDescription('');
      })
      .catch(error => {
        console.error('Error submitting expense:', error);
      });
  };










  return (
    <div>
      <h2>Submit Expense</h2>
      <input
        type="number"
        value={expenseAmount}
        onChange={(e) => setExpenseAmount(e.target.value)}
        placeholder="Expense Amount"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button onClick={handleSubmitExpense}>Submit Expense</button>
    </div>
  );
};







export default ExpenseSubmission;