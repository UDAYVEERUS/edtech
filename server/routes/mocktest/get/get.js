const mockTest = require("../mocktestSchema")

const getAllQuestion = async(request,response,next)=>{
    try{
        console.log("herher")
        const question_response = await mockTest.find({})
        if(question_response){
            return response.status(200).json({
                data:question_response,
                status:200,
                message:"successfully get "
            })
        }
        else{
            return response.status(402).json({
                status:402,
                message:"unable to processs"
            })
        }
    }
    catch(Err){
        return response.status(500).json({
            message:"server error",
            status:500
        })
    }
}


const getOnlyQuestion = async(request,response,next)=>{
    try{
        const question_response = await mockTest.find().select('-answer')
        if(question_response){
            return response.status(201).json({
                data:question_response,
                status:201,
                message:"successfully get"
            })
        }
        else{
            return response.status(402).json({
                status:402,
                message:"unable to processs"
            })
        }
    }
    catch(Err){
        return response.status(500).json({
            message:"server error",
            status:500
        })
    }
}

const getQuestionsByCourse = async(request,response,next)=>{
    try{
        const question_response = await mockTest.find({course_name:request.params.course_id})
        if(question_response){
            return response.status(200).json({
                data:question_response,
                status:200,
                message:"successfully get"
            })
        }
        else{
            return response.status(402).json({
                status:402,
                message:"unable to processs"
            })
        }
    }
    catch(Err){
        return response.status(500).json({
            message:"server error",
            status:500
        })
    }
}


const getQuestionsBySubCourse = async(request,response,next)=>{
    try{
        const question_response = await mockTest.find({course_name:request.params.course_id,subject_name:request.params.subject_id})

        if(question_response){
            return response.status(200).json({
                data:question_response,
                status:200,
                message:"successfully get"
            })
        }
        else{
            return response.status(402).json({
                status:402,
                message:"unable to processs"
            })
        }
    }
    catch(Err){
        return response.status(500).json({
            message:"server error",
            status:500
        })
    }
}




module.exports = {getAllQuestion,getOnlyQuestion,getQuestionsByCourse,getQuestionsBySubCourse}