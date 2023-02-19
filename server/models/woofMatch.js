import mongoose, { mongo } from "mongoose";

const WoofMatch = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const User = mongoose.model("User", WoofMatch);

export default User;
