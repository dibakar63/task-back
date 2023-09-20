const bookModel=require('./model');

const bookController=async(req,res)=>{
   
    try {
        const {name,author,type,rating,price}=req.body;
        
        
        let books=await new bookModel({name,author,type,rating,price}).save();
        res.status(201).send({
            success:true,
            message:"User saved successfully",
            books
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,message:'Error in Add data',
            error
        })
    }
}
const getAllData=async(req,res)=>{
    let books;
   try {
     books=await bookModel.find()
     res.status(201).send({
        success:true,message:' books found sucessfully',
        books
     })
    
   } catch (error) {
    res.status(500).send({
        success:false,message:'No users found',
        books
     })
   }
}
const getById=async(req,res)=>{
    let id=req.params.id;
    let books;
    try {
        books=await bookModel.findById(id)
        if(!books){
            res.status(500).send({
                success:false,
                message:"no books found with this id",
    
            })
        }
        res.status(200).send({
            success:true,
            message:"Book found with this id",
            books
        })

        
    } catch (error) {
       console.log(error) 
    }
    
}
const updateBooks=async(req,res)=>{
    let id=req.params.id;
    let books;
    try {
        const {name,author,type,rating,price}=req.body;
        newusers=await bookModel.findByIdAndUpdate(id,{name,author,type,rating,price})
        books=await newusers.save()
        if(!books){
            res.status(500).send({
                success:false,
                message:"BOOK is not updated",
    
            })
        }
        res.status(200).send({
            success:true,
            message:"Book updated",
            books
        }) 
    } catch (error) {
        
    }
}
const deleteBooks=async(req,res)=>{
    let id=req.params.id;
    let books;
    try {
        books=await bookModel.findByIdAndDelete(id)
        if(!books){
            res.status(500).send({
                success:false,
                message:"no books found with this id",
    
            })
        }
        res.status(200).send({
            success:true,
            message:"Books Deleted",
            books
        })

        
    } catch (error) {
       console.log(error) 
    }
    
}

module.exports.bookController=bookController
module.exports.getAllData=getAllData
module.exports.getById=getById
module.exports.updateBooks=updateBooks
module.exports.deleteBooks=deleteBooks
