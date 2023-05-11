const express=require('express')
const app=express()
const User=require('./model/user')
const mongoose=require('mongoose')
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("Hello world")
})

app.post('/post',async(req,res)=>{
    const {name}=req.body
    let user=await new User({name})
    if(user){
        return res.status(201).json({message: "user creadted"})
    }
return user.save()
})

mongoose.connect('mongodb+srv://mirzafaruk018:123456789AS@cluster0.o59ziq7.mongodb.net/',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Db connected")
}).catch((e)=>{
console.log(e);
})
app.listen(8080,()=>{
    console.log("server is listening on port 8080");
})