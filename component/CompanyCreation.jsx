import React, { useState } from 'react';
import axios from 'axios';









const CompanyCreation = () => {
  const [companyName, setCompanyName] = useState('');
  const [ownerId, setOwnerId] = useState('');

  const handleCreateCompany = () => {
    axios.post('/api/companies', { name: companyName, ownerId })
      .then(response => {
        alert('Company created successfully');
        setCompanyName('');
        setOwnerId('');
      })
      .catch(error => {
        console.error('Error creating company:', error);
      });
  };




  

  return (
    <div>
      <h2>Create Company</h2>
      <input
        type="text"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        placeholder="Company Name"
      />
      <input
        type="text"
        value={ownerId}
        onChange={(e) => setOwnerId(e.target.value)}
        placeholder="Owner ID"
      />
      <button onClick={handleCreateCompany}>Create Company</button>
    </div>
  );
};

export default CompanyCreation;