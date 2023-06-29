const mockTest = require("../mocktestSchema")

const updateQuestion = async(request,response,next)=>{
    try{
        
        const question_response = await mockTest.find({course_name:"640723cf6cd46b3d892b1d80"}).updateMany({subject_name:"641d94e9d0c14775c23b85a0"})
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
module.exports = updateQuestion
