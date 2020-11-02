const mongoose=require('mongoose')
mongoose.connect('mongodb://mongo:27017/prac', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(res=>{
    console.log('connected to database')
}).catch(e=>{
    console.log(e)
})