import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import BorrowerList from './components/BorrowerList';
import BorrowerDetails from './components/BorrowerDetails';
import BorrowingForm from './components/BorrowingForm';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Library Management</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/books">Books</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/borrowers">Borrowers</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/books" element={<BookList />} />
            <Route path="/books/:id" element={<BookDetails />} />
            <Route path="/borrowers" element={<BorrowerList />} />
            <Route path="/borrowers/:id" element={<BorrowerDetails />} />
            <Route path="/borrow/:bookId/:borrowerId" element={<BorrowingForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
