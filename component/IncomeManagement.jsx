import React, { useState } from 'react';
import axios from 'axios';

const IncomeManagement = () => {
  const [incomeAmount, setIncomeAmount] = useState('');
  const [companyId, setCompanyId] = useState('');

  const handleAddIncome = () => {
    axios.post('/api/income', { amount: incomeAmount, companyId })
      .then(response => {
        alert('Income added successfully');
        setIncomeAmount('');
      })
      .catch(error => {
        console.error('Error adding income:', error);
      });
  };

  return (
    <div>
      <h2>Add Income</h2>
      <input
        type="number"
        value={incomeAmount}
        onChange={(e) => setIncomeAmount(e.target.value)}
        placeholder="Income Amount"
      />
      <input
        type="text"
        value={companyId}
        onChange={(e) => setCompanyId(e.target.value)}
        placeholder="Company ID"
      />
      <button onClick={handleAddIncome}>Add Income</button>
    </div>
  );
};

export default IncomeManagement;