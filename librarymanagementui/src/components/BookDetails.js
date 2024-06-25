import React, { useState, useEffect } from 'react';
import { getBookDetails } from '../services/api';

const BookDetails = ({ bookId }) => {
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetchBookDetails();
  }, [bookId]);

  const fetchBookDetails = async () => {
    const data = await getBookDetails(bookId);
    setBook(data);
  };

  return (
    <div>
      {book ? (
        <div>
          <h2>{book.title}</h2>
          <p>{book.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BookDetails;
