const Blogs = require("../blogSchema")
const updateBlog =async(request,response,next)=>{
    try{
        
        const blogResponse = await Blogs.findByIdAndUpdate(request.params.id,request.body)
        if(blogResponse){
            return response.status(200).json({
                data:blogResponse,
                status:200,
                message:"successfully added"
            })
        }
        return response.status(402).json({
            status:402,
            message:"Unable to add",
        })

    }catch(Err){
        return response.status(500).json({
            status:500+Err,
            message:"server Error",
        })
    }
}
module.exports = {updateBlog}