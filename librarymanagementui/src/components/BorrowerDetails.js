
import React, { useState, useEffect } from 'react';
import { getBorrowerDetails } from '../services/api';

const BorrowerDetails = ({ borrowerId }) => {
  const [borrower, setBorrower] = useState(null);

  useEffect(() => {
    fetchBorrowerDetails();
  }, [borrowerId]);

  const fetchBorrowerDetails = async () => {
    const data = await getBorrowerDetails(borrowerId);
    setBorrower(data);
  };

  return (
    <div>
      {borrower ? (
        <div>
          <h2>{borrower.name}</h2>
          <p>{borrower.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BorrowerDetails;
