const express=require('express');
const app = express()
// const post = require('../controllers/post');
const Post = require('../controllers/post')
// const router= express.Router();
app.post("/post-upload", async(req,res)=>{
    try{
        const newPostData={
            caption:req.body.caption,
            image:{
                public_id:"req.body.public_id",
                url:"req.body.url"
            },
            owner:req.user_id
        };
        const newPost= await Post.create(newPostData);
        

        res.status(201).json({
            success:true,
            post:newPost,
        })

    }catch(error){
        res.status(500).json({
            success:false,
            massage:error.massage
        })
    }
}
)

//router.post('/post/upload' ,(req,res)=>post.createPost)
// module.exports=router;