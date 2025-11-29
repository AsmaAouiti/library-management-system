import express from "express";
import { registerUser } from "../controllers/userController.js";

const router = express.Router();

// ✅ Signup route
router.post("/signup", registerUser);

export default router;
