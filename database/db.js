import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

export const Connection=async ()=>{
    try{
         await mongoose.connect(process.env.MONGO_URL);
       console.log('db connected successfully');

    }

    catch(error){
        console.log(error.message);
    }
}