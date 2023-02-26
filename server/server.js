import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/userRoute.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://Piotr:2P3XyRtRVUyIb4Vr@woofmatc.vwkvpkr.mongodb.net/WoofMatch"
);

//require route
app.use("/", router);
app.listen(process.env.PORT, (req, res) => {
  console.log(`server started at port ${process.env.PORT}`);
});
export default app;
