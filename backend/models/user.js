const mongoose=require('mongoose');
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter a name"]
    },
    avatar:{
        public_id:String,
        url:String,

    },
    email:{
        type:String,
        required:[true,"please enter an email"],
        unique:[true,"email alredy exist"]
    },
    password:{
        type:String,
        required:[true,"please enter a password"],
        minlength:[6,"password must be 6 character"],
        select:false,
    },
    posts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"post"
        }
    ],
    followers:[{
        type:mongoose.Schema.Types.ObjectId,
            ref:"user",

    }],
    following:[{
        type:mongoose.Schema.Types.ObjectId,
            ref:"user",

    }],
});

module.exports=mongoose.model("user",userSchema);