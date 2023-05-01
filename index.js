const mongoose= require('mongoose');
const express = require('express');
const path = require('path');
const port= 8000;
const db = require('./config/mongoose')
const message= require('./model/message')
const app = express();
const DB ='mongodb+srv://sanskar:1234Test@cluster0.jqhknkx.mongodb.net/TestDB?retryWrites=true&w=majority'

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false,
    

}).then(()=>{
    console.log('Communication Successful');
}).catch((err)=>console.log('Error here',err));

app.set('view engine','ejs');
app.set('views','views');
app.use(express.urlencoded())
app.get('/', function(req,res){
    return res.render('home')
    // res.send('<h1> Cool, it is running smoothly </h1>')
})

app.post('/sendMsg',async(req,res)=>{

    // const response= req.body.message
    // await message.insertMany([{message}])
    let response = await message.create(req.body)
    res.send('send')
})




app.listen(port,function(err){
    if(err){ console.log ('Error in running server', err);}
    console.log('My server is running on port',port);
})