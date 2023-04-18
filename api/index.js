const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const PostRoute = require('./routes/posts')
const catRoute = require('./routes/categories')
const multer = require("multer")
const path = require("path")


dotenv.config()
app.use(express.json());
app.use('/images',express.static(path.join(__dirname,'/images')))


main().then(console.log('connected to mongodb')).catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);

  
}

const storage = multer.diskStorage({
  destination:(req,file,cb) =>{
    cb(null,'images')
  },filename:(req,file,cb)=>{
    cb(null,req.body.name)
},
})

const upload = multer({storage:storage});
app.post("/api/upload",upload.single("file"),(req,res)=>{
  res.status(200).json("File has been uploaded")
})

app.use((req, res, next) => {
  // Set the Access-Control-Allow-Origin header to allow requests from any domain
  res.header('Access-Control-Allow-Origin', '*');
  // Set the Access-Control-Allow-Headers header to allow the "Content-Type" header
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  // Set the Access-Control-Allow-Methods header to allow the "GET" and "POST" methods
  res.header('Access-Control-Allow-Methods', 'GET, POST');
  next();
});

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/posts", PostRoute)
app.use("/api/categories", catRoute)


app.listen("5000",()=>{
    console.log("Backend is running");
})