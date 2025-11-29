import db from "../config/db.js";

export const addBook = (req, res) => {
  const { title, author, category, isbn, quantity } = req.body;
  const adminId = req.user.user_id;

  const available = quantity;
  db.query(
    "INSERT INTO books (title, author, category, isbn, quantity, available_copies, added_by) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [title, author, category, isbn, quantity, available, adminId],
    (err) => {
      if (err) return res.status(500).json({ message: "Error adding book", err });
      res.status(201).json({ message: "Book added successfully" });
    }
  );
};

export const getAllBooks = (req, res) => {
  db.query("SELECT * FROM books", (err, result) => {
    if (err) return res.status(500).json({ message: "Error fetching books", err });
    res.status(200).json(result);
  });
};
