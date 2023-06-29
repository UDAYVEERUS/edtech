const express = require('express')
const cors = require('cors')
const app = express()
const dotenv = require("dotenv").config()
const fileupload = require("express-fileupload");
const connectToMongo = require('./db')
const uploadFiles = require('./routes/upload/Upload')
connectToMongo()
app.use(fileupload());
app.use(express.json())
app.use(cors())
app.use("/mocktest",require("./routes/mocktest/routes"))
app.use("/weeklytest",require("./routes/weeklytest/routes"))
app.use("/user",require("./routes/user/routes"))
app.use("/course",require("./routes/course/routes"))
app.use("/subject",require("./routes/subject/routes"))
app.use("/blogs",require("./routes/blogs/routes"))
app.use("/upload",require("./routes/upload/routes"))


app.listen(process.env.PORT,()=>{
    console.log("server started at",process.env.PORT)
    
})