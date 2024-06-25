import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

// Books API
export const getBooks = async () => {
  const response = await axios.get(`${API_BASE_URL}/books/`);
  return response.data;
};

export const getBookDetails = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/books/${id}/`);
  return response.data;
};

// Borrowers API
export const getBorrowers = async () => {
  const response = await axios.get(`${API_BASE_URL}/borrowers/`);
  return response.data;
};

export const getBorrowerDetails = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/borrowers/${id}/`);
  return response.data;
};

// Borrowing API
export const borrowBook = async (bookId, borrowerId) => {
  const response = await axios.post(`${API_BASE_URL}/books/${id}/borrow/`, { book_id: bookId, borrower_id: borrowerId });
  return response.data;
};

export const returnBook = async (bookId, borrowerId) => {
  const response = await axios.post(`${API_BASE_URL}/books/${id}/return/`, { book_id: bookId, borrower_id: borrowerId });
  return response.data;
};

