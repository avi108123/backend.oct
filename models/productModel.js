const mongoose = require("mongoose");


let productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
 
},{
    timestamps:true,
})


let Products = mongoose.model("product",productSchema);


module.exports = Products;