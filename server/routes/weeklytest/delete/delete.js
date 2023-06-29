const weeklyTest = require("../weeklyTestSchema")

const deleteTest = async(request,response,next)=>{
    try{
        const question_response = await weeklyTest.deleteOne({_id:request.params.test_id})
        if(question_response){
            return response.status(200).json({
                data:question_response,
                status:200,
                message:"successsfully deleted"
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

module.exports = {deleteTest}