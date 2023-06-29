const mongoose = require('mongoose')
const { Schema } = mongoose

const CourseSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true 
    },
    description:{
        type:String,
        required:false,
    },
    content:{
        type:String,
        required:false
    },
    is_active:{
        type:Boolean,
        required:false,
        default:true
    }


},{timestamps: {
    createdAt: 'created_at', // Use `created_at` to store the created date
    updatedAt: 'updated_at' // and `updated_at` to store the last updated date
}})

const Course = mongoose.model('Courses',CourseSchema)
module.exports = Course