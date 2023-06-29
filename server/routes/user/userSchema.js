const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String,
        required:false,
        default:""
    },
    display_onHome:{
        type:Boolean,
        required:false,
        default:false
    }
    // password:{
    //     type:String,
    //     required:true,
    // }
    
},{timestamps: {
    createdAt: 'created_at', // Use `created_at` to store the created date
    updatedAt: 'updated_at' // and `updated_at` to store the last updated date
}})

const user = mongoose.model('UserSchema',userSchema)
module.exports = user