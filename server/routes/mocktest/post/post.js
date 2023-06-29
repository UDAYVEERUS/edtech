const mockTest = require("../mocktestSchema")

const addQuestion = async(request,response,next)=>{
    try{
        console.log(request.body)
        const question_response = await mockTest.create(request.body)
        if(question_response){
            return response.status(201).json({
                data:question_response,
                status:201,
                message:"successfully added"
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
            message:"server error"+Err,
            status:500
        })
    }
}

const addMultipleQuestion = async(request,response,next)=>{
    try{
        const questions = request.body.questions
        questions.map(async(value)=>{
            const question_response = await mockTest.create(value)
            
        })
        // const question_response = await mockTest.create(request.body)
        if(question_response){
            return response.status(201).json({
                // data:question_response,
                status:201,
                message:"successfully added"
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
            message:"server error"+Err,
            status:500
        })
    }

}
module.exports = addQuestion