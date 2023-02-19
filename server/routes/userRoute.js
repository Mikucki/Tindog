import express from "express";
import User from "../models/woofMatch.js";

const router = express.Router();

router.post("/SignUp", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const newUser = new User({
    firstName,
    lastName,
    email,
    password,
  });

  newUser.save();
});

export default router;
