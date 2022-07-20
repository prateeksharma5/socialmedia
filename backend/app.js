const express= require('express');
const app= express();
if(process.env.NODE_ENV!=="production"){
require("dotenv").config({path:"backend/config/config.env"})
}
//using middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//importing route 
// const post=require("./routes/post");
// const user=require("./routes/user");
//using routes
// app.use("/api/v1",post);
// app.use("/api/v1",user);
module.exports=app;