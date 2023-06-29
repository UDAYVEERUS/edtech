const mongoose = require('mongoose')
const { Schema } = mongoose
const mongoosePaginate = require("mongoose-paginate")
const BlogSchema = new Schema({
    title:{
        type:String,
        required:true,
        unique:true 
    },
    description:{
        type:String,
        required:false,
    },
    descriptionShort:{
        type:String,
        required:false,
    },
    image:{
        type:String,
        required:false,
        default:"https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/master-liberty-demo_Free/389771183/web/assets/images/blog-1.jpg"
    },

},{timestamps: {
    createdAt: 'created_at', // Use `created_at` to store the created date
    updatedAt: 'updated_at' // and `updated_at` to store the last updated date
}})
BlogSchema.plugin(mongoosePaginate)

const Blogs = mongoose.model('Blogs',BlogSchema)
module.exports = Blogs