const express=require('express')
const mongoose=require('mongoose')
const User=require('../models/user')
const router=new express.Router()

router.get('/',async(req,res)=>{
    console.log('node js project with mongodb working in console')
    res.send('node js project with mongodb working')
})

 
router.post('/addUser',async(req,res)=>{
    const user=new User(req.body)
    console.log(user)
    await user.save()
    res.send(user)

})


router.post('/addfriend/:id',async(req,res)=>{
    
    const id=req.params.id
    const friendID=req.body.fID
    const user=await User.findById({_id:mongoose.Types.ObjectId(id)})
    user.friends.push(friendID)
    await user.save()
    res.send(user)
    
})       

router.get('/getUser/:id',async(req,res)=>{
    const id=req.params.id
    //(i)      get user friends friends (multilevel  populates)
    // const user=await User.findById({_id:mongoose.Types.ObjectId(id)}).populate({
    //     path:'friends',
    //     populate:{ path : 'friends' }
    // })

    //(ii)     get user projects (single populates)
    //const user=await User.findById({_id:mongoose.Types.ObjectId(id)}).populate('projects')

    //(iii)   get user projects and friends friends (multilevel and 2 populates)
    const user=await User.findById({_id:mongoose.Types.ObjectId(id)}).populate({
        path:'friends',
        populate:{ path : 'friends' }
    }).populate('projects')
    if(user){                   
        res.send(user)
    }
    else{
        res.send([])
    }
})


router.get('/getUsers',async(req,res)=>{
    
    const users=await User.find().populate('projects')
    if(users){
        res.send(users)
    }
    else{
        res.send([])
    }

})


module.exports=router