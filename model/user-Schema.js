import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    // id:{
    //     type:String,
    //     required:true,
    //     unique:true
    // },
    firstname:{
        type:String,
        required:true,
        trim:true
    },
    lastname:{
        type:String,
        required:true,
        trim:true
    },
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        
    },
    phone:{
        type:Number,
        required:true
    }
   
    

});

const User=mongoose.model('user',UserSchema);
export default User;