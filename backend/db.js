const mongoose=require("mongoose")

const mongoURI = "mongodb://localhost:27017/miniproject"

const connectToMongo=()=>
{
    mongoose.connect(mongoURI,()=>{console.log("connection secure")}
    )
}

module.exports=connectToMongo;