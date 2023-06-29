const Course = require("../courseSchema")
const deleteCourse =async(request,response,next)=>{
    try{        
        const courseResponse = await Course.findByIdAndDelete(request.params.id)
        if(courseResponse){
            return response.status(200).json({
                data:courseResponse,
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
module.exports = {deleteCourse}