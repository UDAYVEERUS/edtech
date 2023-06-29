const Course = require("../courseSchema")
const updateCourse =async(request,response,next)=>{
    try{
        
        const courseResponse = await Course.findByIdAndUpdate(request.params.id,request.body)
        if(courseResponse){
            return response.status(201).json({
                data:courseResponse,
                status:201,
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
module.exports = {updateCourse}