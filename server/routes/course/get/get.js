const Course = require("../courseSchema")
const getCourses =async(request,response,next)=>{
    try{        
        const courseResponse = await Course.find({})
        // console.log("resoonse")
        if(courseResponse){
            return response.status(200).json({
                data:courseResponse,
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

const getCoursebyId =async(request,response,next)=>{
    try{        
        const courseResponse = await Course.findById(request.params.id)
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



module.exports = {getCourses,getCoursebyId}