import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "./BookCard";
import "./BookList.css"; 

function BookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/books.json") 
      .then((response) => {
        setBooks(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        setError("Failed to load books. Please try again later.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-4">Loading books...</p>;
  }

  if (error) {
    return <p className="text-center text-danger mt-4">{error}</p>;
  }

  return (
    <div className="book-list container mt-4">
      <h2 className="mb-3">Available Books</h2>
      <div className="row">
        {books.length > 0 ? (
          books.map((book) => (
            <div className="col-md-4 mb-3" key={book.id}>
              <BookCard book={book} />
            </div>
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
}

export default BookList;
