import express from "express";
import {
  registerUser,
  logInUser,
  logOutUser,
} from "../controllers/auth.controller.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", logInUser);
router.get("/logout", logOutUser);

export { router as authRouter };
