import React, { useState } from 'react';
import { borrowBook, returnBook } from '../services/api';

const BorrowingForm = ({ bookId, borrowerId, onTransactionComplete }) => {
  const [action, setAction] = useState('borrow');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (action === 'borrow') {
      await borrowBook(bookId, borrowerId);
    } else {
      await returnBook(bookId, borrowerId);
    }
    onTransactionComplete();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Action</label>
        <select value={action} onChange={(e) => setAction(e.target.value)}>
          <option value="borrow">Borrow</option>
          <option value="return">Return</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BorrowingForm;
