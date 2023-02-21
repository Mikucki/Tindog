import mongoose, { mongo } from "mongoose";

const WoofUser = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", WoofUser);

export default User;
