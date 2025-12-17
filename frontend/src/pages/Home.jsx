import React from "react";
import { useNavigate } from "react-router-dom";
import { books } from "../utils/mockData";

function Home() {
  const navigate = useNavigate();

  const handleBorrow = (book) => {
   
    const user = JSON.parse(localStorage.getItem("user")) || null;
    if (!user) {
     
      localStorage.setItem("bookToBorrow", JSON.stringify(book));
      navigate("/login");
      return;
    }

    const requests = JSON.parse(localStorage.getItem("borrowRequests") || "[]");
    requests.push({
      userName: user.name,
      book,
    });
    localStorage.setItem("borrowRequests", JSON.stringify(requests));
    alert(`Your request to borrow "${book.title}" has been sent to the admin!`);
  };

  const categories = [
    "Fiction",
    "Non Fiction",
    "Scientific",
    "Biography",
    "Horror",
    "Historical",
  ];

  return (
    <div className="home-page">
      <h1>Available Books</h1>

      {categories.map((category) => (
        <div key={category} className="book-category">
          <h2>{category}</h2>
          <div className="book-list">
            {books
              .filter((book) => book.category === category)
              .map((book) => (
                <div key={book.isbn} className="book-card">
                  <img src={book.image} alt={book.title} className="book-image" />
                  <h3>{book.title}</h3>
                  <p><strong>Author:</strong> {book.author}</p>
                  <p><strong>ISBN:</strong> {book.isbn}</p>
                  <button onClick={() => handleBorrow(book)}>Borrow</button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
