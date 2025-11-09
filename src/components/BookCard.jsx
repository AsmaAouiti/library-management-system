import React from "react";

function BookCard({ book }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "10px",
      width: "200px",
      backgroundColor: "rgba(255,255,255,0.1)",
      textAlign: "center",
    }}>
      <img src={book.image} alt={book.title} width="100%" style={{ borderRadius: "10px" }} />
      <h4>{book.title}</h4>
      <p>{book.author}</p>
      <p><strong>ISBN:</strong> {book.isbn}</p>
      <button disabled={!book.available}>
        {book.available ? "Borrow" : "Unavailable"}
      </button>
    </div>
  );
}

export default BookCard;
