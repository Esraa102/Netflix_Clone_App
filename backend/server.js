import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectToDB } from "./config/connectDB.js";
import { authRouter } from "./routes/auth.route.js";

const port = process.env.PORT || 5001;
const app = express();
connectToDB();
app.use(
  cors({
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("api/auth/", authRouter);
app.listen(port, () => {
  console.log("Server Is running on", port);
});
