
const jwt = require("jsonwebtoken")
const User = require("../models/userModel")

let checkLogin= async(req,res,next)=>{
   try{
        let header = req.headers.authorization;

        if(!header){
            return next( new Error("no header provided"))
        }
    
     let token = header.split(" ")[1];
    
    
     if(!token){
        return res.send("no token provided")
     }
    
            let payload =  jwt.verify(token,"thisisyourprivatekey")
           
            let existingUser = await User.findById(payload.userId);
    
            if(!existingUser){
                return res.send("you are not allowed to fetch this api")
            }

            next();
        }catch(error){
            next(new Error(error.message))
        }
        
   
}

module.exports = checkLogin;