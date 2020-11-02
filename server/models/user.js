const expres=require('express')
const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        type:String
    }, 
    email:{
        type:String
    },
    age:{
        type:String
    },
    friends:[{
        type:String,
        ref:'User'
    }],
    projects:[{
        type:String,
        ref:'Project'
    }],
    
})

const User=mongoose.model('User',userSchema)
module.exports=User