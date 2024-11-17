const mongoose=require('mongoose');

const LoginAuthSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const LoginAuthModel=mongoose.model("Users",LoginAuthSchema)
module.exports=LoginAuthModel