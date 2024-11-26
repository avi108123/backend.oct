const express = require("express");

const Router = express.Router();
const User = require("../models/userModel");
const {
  getAllUser,
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
} = require("../controllers/userControllers");
//localhost:8000/user


const authMiddleware = require("../middlewares/authMiddleware");

Router.get("/", getAllUser);

Router.post( "/register",authMiddleware, registerUser);

Router.post("/login", loginUser);

Router.put("/update", updateUser);

Router.delete("/delete", deleteUser);

module.exports = Router;
