const app= require("./app");
const {connectDatabase}=require('./config/database')
const {createPost} = require('../backend/controllers/post')
connectDatabase();
// var router = express.Router();

app.post("/post-upload", createPost)
app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`);
});