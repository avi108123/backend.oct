const User = require("../models/userModel");

const jwt = require("jsonwebtoken");


var bcrypt = require('bcryptjs');

let getAllUser =async(req,res)=>{
    let data = await User.find();
    res.send(data);
}


const{validationResult} =require("express-validator")




let registerUser =async (req,res)=>{
  
let result = validationResult(req);

let error = result.errors;

if(error.length>0){

    let err= error.map((errr)=>errr.msg)
   return res.send(err[0])
}
  
  
  
    let data = req.body;

    let existingUser = await User.findOne({email:data.email});

    if(existingUser){
      return  res.send("you are already registered please login");
    }

let hashpassword = bcrypt.hashSync(data.password,10);

// let obj ={
//     name:
//     email:
//     password:hashpassword
// }


  let newUser = await   User.create({...data,password:hashpassword});
  res.send(newUser);
}




let loginUser = async (req,res)=>{
    let data = req.body;
    
    let existingUser = await User.findOne({email:data.email});
    
    if(!existingUser){
        return res.send("no user found please register first")
    }
 
   let result = bcrypt.compareSync(data.password,existingUser.password)

   if(!result){
    return res.send("wrong password")
   }


   let token = jwt.sign({userId:existingUser._id},"thisisyourprivatekey")

   


    res.send({existingUser,token});


}


let updateUser = async (req,res)=>{
   let id = req.query.id;
   let data = req.body;

   let updatedUser = await User.findByIdAndUpdate(id,data,{new:true});
   res.send(updatedUser)

}


let deleteUser = async (req,res)=>{
    let id = req.query.id;

    let deletedUser = await User.findByIdAndDelete(id);

    if(!deletedUser){
        return res.send("no user exist to delete")
    }

   res.send("user deleted")

}


module.exports = {getAllUser,registerUser,loginUser,updateUser,deleteUser}



 
// 123435 => dsajf;lkjga;lsdkj;lkjga;sdlkjg;ldaskhg;asdkj;lk => 123435;


// 12345 => sdklj;galkdsj;gldskja;kghdsj;akhjasdkljf;lk 


// 12345 => sdklj;galkdsj;gldskja;kghdsj;akhjasdkljf;lk 