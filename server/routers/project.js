const express=require('express')
const mongoose=require('mongoose')
const Project=require('../models/project')
const User = require('../models/user')
const router=new express.Router()


router.post('/addProject',async(req,res)=>{

    const project=new Project(req.body)
    await project.save()
    const user=await User.findById({_id:mongoose.Types.ObjectId(req.body.owner)})
    console.log(user.projects)
    user.projects.push(project._id)
    await user.save()
    res.send(project)

})

router.get('/getProjects',async(req,res)=>{
    const projects=await Project.find().populate('owner')
    res.send(projects)
})


module.exports=router