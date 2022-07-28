const express = require("express");
const morgan = require("morgan");
const cors =require("cors")
const helmet = require("helmet");
const dotenv = require("dotenv");
dotenv.config();
const connectDataBase = require('./mongoDB/connection');
connectDataBase();
const app = express();

// Routes Import 
const authRoute = require("./routes/auth")
const userRoute = require("./routes/user")
const postRoute = require("./routes/post")

// MIDDLEWARE
app.use(express.json());
app.use(cors())
app.use(helmet())
app.use(morgan("common"));


// ROUTES
app.use("/auth",authRoute)
app.use("/user",userRoute)
app.use("/post",postRoute)


app.listen(process.env.PORT,()=>{
    console.log("server is running on port no : "+ process.env.PORT)
})