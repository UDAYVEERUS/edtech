const weeklyTest = require("../weeklyTestSchema")

const getTest = async(request,response,next)=>{
    try{
        const question_response = await weeklyTest.find({})
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



const getTestById  = async(request,response,next)=>{
    try{
        const question_response = await weeklyTest.findById(request.params.test_id)
        if(question_response){
            request.ques
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

module.exports = {getTest,getTestById }