import React, { useState } from 'react';
import axios from 'axios';

const AccountCreation = ({ companyId }) => {
  const [accountName, setAccountName] = useState('');
  const [accountEmail, setAccountEmail] = useState('');

  const handleCreateAccount = () => {
    axios.post('/api/accounts', { companyId, name: accountName, email: accountEmail })
      .then(response => {
        alert('Account created successfully');
        setAccountName('');
        setAccountEmail('');
      })
      .catch(error => {
        console.error('Error creating account:', error);
      });
  };

  return (
    <div>
      <h2>Create Account</h2>
      <input
        type="text"
        value={accountName}
        onChange={(e) => setAccountName(e.target.value)}
        placeholder="Account Name"
      />
      <input
        type="email"
        value={accountEmail}
        onChange={(e) => setAccountEmail(e.target.value)}
        placeholder="Account Email"
      />
      <button onClick={handleCreateAccount}>Create Account</button>
    </div>
  );
};

export default AccountCreation;