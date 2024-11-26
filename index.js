const express = require("express");
const userRouter = require("./routers/userRouter");
const productRouter = require("./routers/productRouter");
const mongoose = require("mongoose")
const server = express();

server.use(express.json());


//localhost:8000/





server.use("/user",userRouter);

server.use("/product",productRouter);

server.get('/',(req,res)=>{
    res.send("server is up ")
})






mongoose.connect("mongodb://localhost:27017/mydb2")
.then(()=>console.log("connected to database"))
.catch((err)=>console.log(err))










server.listen(8000,()=>{
    console.log("server is listening on port 8000")
})

