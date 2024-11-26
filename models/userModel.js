
const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    name:{
        type:String,
        minLength:3,
        maxLength:12,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        minLength:6,
        required:true,
    },
    age:{
        type:Number,
    }
})





let User = mongoose.model("users",userSchema);

module.exports = User;



