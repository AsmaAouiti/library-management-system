import React, { useState, useEffect } from "react";
import { books as allBooks } from "../utils/mockData";

function DashboardUser() {
  const [borrowedBooks, setBorrowedBooks] = useState(() => {
    const stored = localStorage.getItem("borrowedBooks");
    return stored ? JSON.parse(stored) : [];
  });

  const [availableBooks, setAvailableBooks] = useState(allBooks);

  const handleBorrow = (book) => {

    const userName = "Current User"; 
    const newRequest = { userName, book };
    const storedRequests = JSON.parse(localStorage.getItem("borrowRequests") || "[]");
    localStorage.setItem("borrowRequests", JSON.stringify([...storedRequests, newRequest]));

    alert(`Borrow request for "${book.title}" sent to Admin!`);
  };

  return (
    <div className="home-page">
      <h1>Your Borrowed Books</h1>
      {borrowedBooks.length === 0 ? (
        <p>You have not borrowed any books yet.</p>
      ) : (
        <div className="book-list">
          {borrowedBooks.map((book) => (
            <div key={book.isbn} className="book-card">
              <img className="book-image" src={book.image} alt={book.title} />
              <h3>{book.title}</h3>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>ISBN:</strong> {book.isbn}</p>
            </div>
          ))}
        </div>
      )}

      <h1 style={{ marginTop: "30px" }}>Available Books</h1>
      <div className="book-list">
        {availableBooks.map((book) => (
          <div key={book.isbn} className="book-card">
            <img className="book-image" src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>ISBN:</strong> {book.isbn}</p>
            <button onClick={() => handleBorrow(book)}>Borrow</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardUser;
