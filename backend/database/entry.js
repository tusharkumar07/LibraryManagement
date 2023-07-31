const mongoose=require('mongoose');
const entrySchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    bookId:{
        type:Number,
        require:true,
    },
    rollNo:{
        type:Number,
        require:true,
    },
    startDate:{
        type:String,
        require:true,
    },
    lastDate:{
        type:String,
        require:true,
    },
})

const Table=mongoose.model("Table",entrySchema);

module.exports=Table;