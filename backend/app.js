const express=require('express');
const app=express();
const mongoose=require('mongoose');
const Table=require('./database/entry');
const cors = require('cors')
const bodyParser = require('body-parser')
const nodemailer=require("nodemailer")
const apiCse=require("./apiCse.json");
app.use(cors());
app.use(bodyParser.json())


mongoose.connect('mongodb://127.0.0.1:27017/libraryManagement').then(()=>{
    console.log("Connected with DataBase");
}).catch((err)=>{
    console.log(`Error in connecting Dtabase : ${err}`);
})

const sendMailInfo=async(mailData,date)=>{
    let mailTrasport=await nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"tusharpathania07@gmail.com",
            pass:"mlocmszhsaxaapav"
        }
    })
    let details={
        from:"tusharkumar0510@gmail.com",
        to:mailData,
        subject:"Mail for Submission of Books",
        html:`<p >Today is Your Last Date for Submission of Book that is Issued by you on ${date}</p>`
    }
    mailTrasport.sendMail(details,(err)=>{
        if(err){
            console.log(`Error in sendmail :${err}`)
        }
        else{
            console.log("Mail sent successfully")
        }
    })
}

app.get("/",(req,res)=>{
    res.send("backend is connected")
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

app.post("/sendMail",async(req,res)=>{
    try{
        console.log(req.body.email);
        sendMailInfo(req.body.email,req.body.date);
        res.send(true);
    }catch(err){
        console.log(`Error in mail from Backend : ${err}`);
        res.send(flase)
    } 
})

app.get("/apiCse",(req,res)=>{
    res.send(apiCse);
})
app.listen(5000,()=>{
    console.log("listening on port no 5000");
})