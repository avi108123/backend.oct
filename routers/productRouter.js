const express = require("express");
const { getAllProduct, createProduct, deleteProduct, updateProduct } = require("../controllers/productControllers");
const checkLogin = require("../middlewares/checkLogin");

const Router = express.Router();

// localhost:8000/product



Router.get("/",getAllProduct)

Router.post("/create",checkLogin,createProduct)

Router.put("/update", checkLogin,updateProduct)

Router.delete("/delete",checkLogin,deleteProduct)





module.exports = Router;