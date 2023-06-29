const mongoose = require('mongoose')
const { Schema } = mongoose

const SubjectSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:false
    },
    description:{
        type:String,
        required:false,
    },
    content:{
        type:String,
        required:false,
        default:""
    },
    course_id:{
        type:Schema.Types.ObjectId,
        ref:"Courses",
        required:true
    },
    image:{
        type:String,
        required:false
    }

},{timestamps: {
    createdAt: 'created_at', // Use `created_at` to store the created date
    updatedAt: 'updated_at' // and `updated_at` to store the last updated date
}})

const Subject = mongoose.model('Subject',SubjectSchema)
module.exports = Subject
