import React, { useState, useEffect } from 'react';
import { getBorrowers } from '../services/api';

const BorrowerList = () => {
  const [borrowers, setBorrowers] = useState([]);

  useEffect(() => {
    fetchBorrowers();
  }, []);

  const fetchBorrowers = async () => {
    const data = await getBorrowers();
    setBorrowers(data);
  };

  return (
    <div>
      <h2>Borrowers</h2>
      <ul>
        {borrowers.map(borrower => (
          <li key={borrower.id}>{borrower.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BorrowerList;
