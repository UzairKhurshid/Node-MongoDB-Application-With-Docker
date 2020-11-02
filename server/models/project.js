const expres=require('express')
const mongoose=require('mongoose')

const projectSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    desc:{
        type:String
    },
    owner:{
        type:String,
        required:true,
        ref:'User'
    }
})

const Project=mongoose.model('Project',projectSchema)
module.exports=Project