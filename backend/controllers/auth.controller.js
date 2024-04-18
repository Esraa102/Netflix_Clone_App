import { customeError } from "../utils/customeError.js";
import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const registerUser = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (username && email && password) {
    try {
      const user = await User.findOne({ email });
      if (user) {
        next(customeError(res.status(400), "User Is Already Exist"));
      } else {
        const hashedPassword = bcryptjs.hashSync(password, 10);
        const newUser = await User.create({
          username,
          email,
          password: hashedPassword,
        });
        const accessToken = jwt.sign(
          {
            _id: newUser._id,
            username: newUser.username,
            email: newUser.email,
            password: newUser.password,
          },
          process.env.ACCESS_SECRET_TOKEN,
          { expiresIn: "1h" } // expire after 1h
        );
        const { password: encryptedPass, ...rest } = newUser._doc;
        res
          .cookie("access_token", accessToken, {
            httpOnly: true,
            maxAge: 3600000, // just to confirm
          })
          .status(201)
          .json({ userData: rest });
      }
    } catch (error) {
      next(customeError(res.status(500), error.message));
    }
  } else {
    next(customeError(res.status(400), "All Inputs Are Essential"));
  }
};

const logInUser = async (req, res, next) => {
  const { email, password } = req.body;
  if (email && password) {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        next(customeError(res.status(401), "User Is Unathenticated"));
      } else {
        if (bcryptjs.compareSync(password, user.password)) {
          const accessToken = jwt.sign(
            {
              _id: user._id,
              email: user.email,
              password: user.password,
            },
            process.env.ACCESS_SECRET_TOKEN,
            { expiresIn: "1h" }
          );
          const { password: encryptedPass, ...rest } = user._doc;
          res
            .cookie("access_token", accessToken, {
              httpOnly: true,
              maxAge: 3600000,
            })
            .status(200)
            .json({ userData: rest });
        } else {
          next(customeError(res.status(400), "Invalid Credentials"));
        }
      }
    } catch (error) {
      next(customeError(res.status(500), error.message));
    }
  } else {
    next(customeError(res.status(400), "All Inputs Are Essential"));
  }
};

const logOutUser = async (req, res) => {
  res.clearCookie("access_token").status(200).json("Logged Out Successfully");
};

export { registerUser, logInUser, logOutUser };
