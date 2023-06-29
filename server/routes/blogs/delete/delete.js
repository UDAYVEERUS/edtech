const Blogs = require("../blogSchema")
const deleteBlogs =async(request,response,next)=>{
    try{        
        const blogsResponse = await Blogs.findByIdAndDelete(request.params.id)
        if(blogsResponse){
            return response.status(200).json({
                data:blogsResponse,
                status:200,
                message:"successfully deleted"
            })
        }
        return response.status(402).json({
            status:402,
            message:"Unable to delete",
        })

    }catch(Err){
        return response.status(500).json({
            status:500+Err,
            message:"server Error",
        })
    }
}
module.exports = {deleteBlogs}