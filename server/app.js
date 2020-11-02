require('./db/db')
const express=require('express')
const bodyParser=require('body-parser')
const app=express()

const userRouter=require('./routers/user')
const projectRouter=require('./routers/project')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(userRouter)
app.use(projectRouter)

app.listen(5000,()=>{
    console.log('Server is up and running on port 5000')
})