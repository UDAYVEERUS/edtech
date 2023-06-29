const mongoose = require('mongoose')
const { Schema } = mongoose

const resultSchema = new Schema({
    User:{
        type:Schema.Types.ObjectId,
        ref:"UserSchema",
        required:true
    },
    TestName:{
        type:Schema.Types.ObjectId,
        ref:"WeeklyTestSchema",
        required:true
    },
    result:{
        type:Number,
        required:true
    }
},{timestamps: {
    createdAt: 'created_at', // Use `created_at` to store the created date
    updatedAt: 'updated_at' // and `updated_at` to store the last updated date
}})

const result = mongoose.model('Result',resultSchema)
module.exports = result