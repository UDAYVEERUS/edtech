const user = require("../userSchema")

const updateUser = async(request,response,next)=>{
    try{
        const user_response = await user.findByIdAndUpdate(request.params.id,request.body)
        if(user_response){
            return response.status(200).json({
                data:user_response,
                message:"users fetched",
                status:200
            })
        }
        return response.status(402).json({
            message:"unable to process",
            status:402,
        })
    }
    catch(err){
        return response.status(500).json({
            message:err,
            status:500
        })
    }
}

module.exports = {updateUser}