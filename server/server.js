import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./routes/userRoute.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

connectDB();
//require route
app.use("/", userRouter);

app.listen(process.env.PORT, (req, res) => {
  console.log(`server started at port ${process.env.PORT}`);
});
export default app;
