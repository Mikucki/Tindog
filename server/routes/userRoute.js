import express from "express";
import User from "../models/userModel.js";
import {
  registerUser,
  getUser,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/api/register", registerUser);
router.delete("/api/delete", deleteUser);
router.get("/api/user", getUser);

export default router;
