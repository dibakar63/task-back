const mongoose=require('mongoose');

const connectDb=async()=>{
    try {
        await mongoose.connect('mongodb+srv://dibakardey63:iY17ClR7URKnRuCl@recipes.rglhoml.mongodb.net/Library_api')
        console.log("mongodb connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports=connectDb