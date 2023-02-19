import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/userRoute.js";
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://Piotr:2P3XyRtRVUyIb4Vr@woofmatc.vwkvpkr.mongodb.net/WoofMatch"
);

//require route
app.use("/", router);
app.listen(3001, () => console.log("twoja stara na 3001"));
export default app;
