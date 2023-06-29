const mongoose = require('mongoose')
const { Schema } = mongoose

const mockTestSchema = new Schema({
    course_name:{
        type:Schema.Types.ObjectId,
        required:true,
        default:"6401d127f88cef55303266fd"
    },
    subject_name:{
        type:Schema.Types.ObjectId,
        required:true,
    },

    question:{
        type:String,
        required:true
    },
    option1:{
        type:String,
        required:true
    },
    option2:{
        type:String,
        required:true
    },
    option3:{
        type:String,
        required:true
    },
    option4:{
        type:String,
        required:true
    },
    answer:{
        type:String,
        required:true
    }
},{timestamps: {
    createdAt: 'created_at', // Use `created_at` to store the created date
    updatedAt: 'updated_at' // and `updated_at` to store the last updated date
}})

const mockTest = mongoose.model('MockTestSchema',mockTestSchema)
module.exports = mockTest