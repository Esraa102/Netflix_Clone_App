import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import cookieParser from "cookie-parser";

const port = process.env.PORT || 5001;
const app = express();

app.use(
  cors({
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.listen(port, () => {
  console.log("Server Is running on", port);
});



//z2d36MPJ4YhS7WG9