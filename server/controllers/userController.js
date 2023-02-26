import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  try {
    res.json({ mesage: "hello" });
    console.log("req was saved");
  } catch (error) {
    console.log("error");
  }
});

const getUser = asyncHandler(async (req, res) => {
  res.json({ message: "getUser" });
});

const deleteUser = asyncHandler(async (req, res) => {
  res.json({ message: "User deleted" });
});

export { registerUser, getUser, deleteUser };
