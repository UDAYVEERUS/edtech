const weeklyTest = require("../weeklyTestSchema")

const patchTest = async(request,response,next)=>{
    try{
        const question_response = await weeklyTest.findById(request.params.test_id).update(request.body)
        if(question_response){
            return response.status(200).json({
                data:question_response,
                status:200,
                message:"successfully updated"
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

module.exports = {patchTest}