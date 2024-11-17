const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const LoginAuthModel=require('./models/LoginAuth')

const port=3001;

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/LoginAuth")


app.post('/register',(req,res)=>{
    LoginAuthModel.create(req.body)
    .then(Users=>res.json(Users))
    .catch(err=>res.json(err))
})

app.post("/login",(req,res)=>{
    const {email,password}=req.body;
    LoginAuthModel.findOne({email: email})
    .then(user=>{
        if(user){
            if(user.password === password)
            {
                res.json("Success")
            }
            else
            {
                res.json("Password is incorrect")
            }
        }
        else
        {
            res.json("No record exists")
        }
    })
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})