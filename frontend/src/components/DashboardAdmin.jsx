import React, { useState, useEffect } from "react";
import { books as initialBooks } from "../utils/mockData";

function DashboardAdmin() {

  const [books, setBooks] = useState(() => {
    return JSON.parse(localStorage.getItem("books")) || initialBooks;
  });


  const [borrowRequests, setBorrowRequests] = useState(() => {
    return JSON.parse(localStorage.getItem("borrowRequests")) || [];
  });


  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    isbn: "",
    category: "",
    image: "",
  });

  
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  
  useEffect(() => {
    localStorage.setItem("borrowRequests", JSON.stringify(borrowRequests));
  }, [borrowRequests]);

 
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setNewBook({ ...newBook, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };


  const handleAddBook = () => {
    if (!newBook.title || !newBook.author || !newBook.image) {
      return alert("Please fill all fields and upload an image!");
    }
    setBooks([...books, newBook]);
    setNewBook({ title: "", author: "", isbn: "", category: "", image: "" });
  };

 
  const handleDeleteBook = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  };


  const handleAcceptRequest = (index) => {
    const request = borrowRequests[index];
    const borrowed = JSON.parse(localStorage.getItem("borrowedBooks") || "[]");
    borrowed.push(request.book);
    localStorage.setItem("borrowedBooks", JSON.stringify(borrowed));

    const updatedRequests = borrowRequests.filter((_, i) => i !== index);
    setBorrowRequests(updatedRequests);
    alert(`Request for "${request.book.title}" accepted!`);
  };


  const handleDeclineRequest = (index) => {
    const updatedRequests = borrowRequests.filter((_, i) => i !== index);
    setBorrowRequests(updatedRequests);
    alert("Request declined.");
  };

  return (
    <div className="home-page">
      <h1 style={{ color: "white" }}>Admin Dashboard</h1>

    
      <h2 style={{ color: "white" }}>Add New Book</h2>
      <div className="auth-box" style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
        <input
          type="text"
          placeholder="ISBN"
          value={newBook.isbn}
          onChange={(e) => setNewBook({ ...newBook, isbn: e.target.value })}
        />
        <input
          type="text"
          placeholder="Category"
          value={newBook.category}
          onChange={(e) => setNewBook({ ...newBook, category: e.target.value })}
        />
        <input type="file" onChange={handleImageUpload} />
        {newBook.image && (
          <img
            src={newBook.image}
            alt="Preview"
            style={{ width: "100px", marginTop: "10px" }}
          />
        )}
        <button onClick={handleAddBook}>Add Book</button>
      </div>

    
      <h2 style={{ color: "white" }}>All Books</h2>
      <div className="book-list">
        {books.map((book, idx) => (
          <div key={idx} className="book-card">
            <img className="book-image" src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>ISBN:</strong> {book.isbn}</p>
            <p><strong>Category:</strong> {book.category}</p>
            <button onClick={() => handleDeleteBook(idx)}>Delete</button>
          </div>
        ))}
      </div>

      <h2 style={{ color: "white" }}>Borrow Requests</h2>
      {borrowRequests.length === 0 ? (
        <p style={{ color: "white" }}>No borrow requests yet.</p>
      ) : (
        borrowRequests.map((req, idx) => (
          req.book && (
            <div key={idx} className="book-card">
              <p><strong>User:</strong> {req.userName}</p>
              <p><strong>Book:</strong> {req.book.title}</p>
              <p><strong>ISBN:</strong> {req.book.isbn}</p>
              <button onClick={() => handleAcceptRequest(idx)}>Accept</button>
              <button onClick={() => handleDeclineRequest(idx)}>Decline</button>
            </div>
          )
        ))
      )}
    </div>
  );
}

export default DashboardAdmin;
