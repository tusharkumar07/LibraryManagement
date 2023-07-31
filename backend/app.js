const express=require('express');
const app=express();
const mongoose=require('mongoose');
const Table=require('./database/entry');
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(cors());
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/libraryManagement').then(()=>{
    console.log("Connected with DataBase");
}).catch((err)=>{
    console.log(`Error in connecting Dtabase : ${err}`);
})

app.post('/entry',async(req,res)=>{
    try{
        const store=await new Table({
            name:req.body.iname,
            email:req.body.iemail,
            bookId:req.body.ibookId,
            rollNo:req.body.irollNo,
            startDate:req.body.istartDate,
            lastDate:req.body.ilastDate,
        })
        const storeData=await store.save();
        res.send(true);
        console.log(storeData);
    }
    catch(err){
        res.send(false);
        console.log(`Error in sending Response : ${err}`)
    }
})

app.get('/details',async(req,res)=>{
    try{
        const issued=await Table.find();
        console.log(issued);
        res.send(issued);
    }catch(err){
        console.log(`Error in backend details GET : ${err}`);
    }
})
app.post("/removeData",async(req,res)=>{
    try{
        const data=await Table.findOneAndDelete({_id:req.body.indexData});
        res.send(true);
    }catch(err){
        res.send(false);
        console.log(`Error in deleting entry from backend :${err}`);
    }
})
app.listen(5000,()=>{
    console.log("listening on port no 5000");
})