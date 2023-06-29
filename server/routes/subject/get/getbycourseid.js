const Course = require("../../course/courseSchema")
const Subject = require("../subjectSchema")

const getSubjectCourseById =async(request,response,next)=>{
    try{        
        const courseResponse = await Course.findById(request.params.course_id)
        const subject_response =  await Subject.find({course_id:courseResponse._id})
        if(subject_response){
            return response.status(200).json({
                data:subject_response,
                message:"succesfully get",
                status:200
            })
        }
        return response.status(402).json({
            status:402,
            message:"Unable to get",
        })

    }catch(Err){
        return response.status(500).json({
            status:500+Err,
            message:"server Error",
        })
    }
}

module.exports = {getSubjectCourseById}