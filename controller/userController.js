import User from "../model/user-Schema.js";


export const userSignup=async (req,res)=>{

try{
    const exist=await User.findOne({email:req.body.email});
    if(exist){
      return  res.status(401).json({
            message:"User Already Exist"
        })
    }
    const user=req.body;
    const newUser=new User(user);
    newUser.save().then(()=>{
        res.status(200).json({
            "Success":"true",
            "New User":newUser
        })
    
       

    })
}    

catch(error){
    res.status(401).json({
        "Message":error.message
    })

}

}


export const userLogin=async (req,res)=>{

try{
    const user=await User.findOne({email:req.body.email,password:req.body.password});
    if(user){
      return  res.status(200).json({
            "message":"User  Exist",
              "data":user
          
        })
    }
    
    else {
        return res.status(401).json({
            message:"User Not exist",
            
        })
    }


}    

catch(error){

  return error.response;

}


}