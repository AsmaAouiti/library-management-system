import express from "express";
import { addBook, getAllBooks } from "../controllers/adminController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// Admin protected routes
router.post("/books", protect, adminOnly, addBook);
router.get("/books", protect, getAllBooks);

export default router;
