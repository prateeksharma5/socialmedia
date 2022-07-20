const User=require("../models/user.js");
exports.ragister=async (req,res)=>{
    try{ 
        const{name,email,password} =req.body;
        //console.log("hllom j  hd bd")
        //console.log(req.body.email)
        let user = await User.findOne({email});
         //console.log("hllom")
         if(user) 
          {
             return res
             .status(404)
             .json({success:false,message:"user already exists"});
          }
      
        user = await User.create({
            name,
            email,
            password,
            avatar:{public_id:"sample_id",url:"sample_url"}
        });
         res.status(201).json({success:true,user
        })   


    }
    catch(error){
        res.status(200).json({
            success:false,
            message:error.massage,

        })
    }
}