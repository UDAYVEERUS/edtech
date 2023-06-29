const result = require("../resultSchema")

const postResult = async(request,response,next)=>{
    try{
        const result_response = await result.find()
        if(result_response){
            return response.status(200).json({
                data:result_response,
                message:"succesfully fetched",
                status:200
            })
        }
        return response.status(402).json({
            message:"unable to process",
            status:402
        })
    }
    catch(err){
        return response.status(500).json({
            message:err,
            status:500
        })
    }
}
module.exports = {postResult}