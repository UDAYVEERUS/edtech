const mongoose = require('mongoose')
const { Schema } = mongoose

const weeklyTestSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    questions:{
        type:Array,
        required:true
    },
    is_active:{
        type:Boolean,
        required:true,
        default:true
    }
},{timestamps: {
    createdAt: 'created_at', // Use `created_at` to store the created date
    updatedAt: 'updated_at' // and `updated_at` to store the last updated date
}})

const weeklyTest = mongoose.model('WeeklyTestSchema',weeklyTestSchema)
module.exports = weeklyTest