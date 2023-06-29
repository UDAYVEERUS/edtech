const mongoose = require('mongoose')
const dotenv=require('dotenv').config()
const URL=process.env.DATABASE_URL
const connectToMongo = ()=>{
    mongoose.connect(URL,()=>{
        console.log("Connect to mongo Successfully")
        
    })
}

module.exports = connectToMongo