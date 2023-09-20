const mongoose=require('mongoose');

const bookSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    
    rating:{
        type:Number,
        required:true
    },
    price:{
        type:String,
        required:true
        
    }
},{timestamps:true})

module.exports=mongoose.model("books",bookSchema)