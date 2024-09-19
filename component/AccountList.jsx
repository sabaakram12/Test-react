import React, { useState, useEffect } from 'react';
import axios from 'axios';







const AccountList = ({ companyId, isSuperAdmin }) => {
  const [accounts, setAccounts] = useState([]);





  useEffect(() => {
    const fetchAccounts = async () => {

      try {
        const response = await axios.get(`/api/accounts`, { params: { companyId, isSuperAdmin } });
        setAccounts(response.data);
      } catch (error) {
        console.error('Error fetching accounts:', error);
      }
    };
    

    fetchAccounts();
  }, [companyId, isSuperAdmin]);






  return (



    <div>
      <h2>Accounts</h2>
      {accounts.length > 0 ? (
        accounts.map(account => (
          <div key={account.id}>
            <p>Name: {account.name}</p>
            <p>Email: {account.email}</p>
          </div>
        ))
      ) : (
        <p>No accounts found.</p>
      )}
    </div>
  );
};






export default AccountList;
