const Products = require("../models/productModel")
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

let getAllProduct=async(req,res) =>{
    let data = await Products.find();
    res.send(data);
}


let createProduct = async(req,res)=>{
try {

    console.log("hii")
    let data = req.body;
  let newProduct = await  Products.create(data);
  res.send(newProduct);
    
} catch (error) {
    res.send(error)
}

}



let updateProduct = async(req,res)=>{

  try {
   
    let id = req.query.id;
    let data = req.body;
    let updatedProduct = await Products.findByIdAndUpdate(id,data,{new:true})
    res.send(updatedProduct)
    
  } catch (error) {
    res.send(error)
  }
}

let deleteProduct = async(req,res)=>{
try {

    let id = req.query.id;
    let deletedProduct = await Products.findByIdAndDelete(id);

    if(!deletedProduct){
        return res.send("not product exist to delete")
    }

    res.send("product deleted")
    
} catch (error) {
    res.send(error)
}


}

module.exports = {getAllProduct,createProduct,updateProduct,deleteProduct}