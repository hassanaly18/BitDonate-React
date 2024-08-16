import mongoose from "mongoose";

export const dbConnection=()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"BitDonate"
    }).then(()=>{
        console.log("Connected to DB")
    }).catch(error=>{
        console.error(error);
    })
}