const user = require("../userSchema")

const getAllUsers = async(request,response,next)=>{

    try{
        const users_response = await user.find({})
        if(users_response){
            return response.status(200).json({
                data:users_response,
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

const getUserById = async(request,response,next)=>{
    try{
        const users_response = await user.findById(request.params.user_id)
        if(users_response){
            return response.status(200).json({
                data:users_response,
                message:"users fetched",
                status:200
            })
        }
        return response.status(402).json({
            message:"unable to process",
            status:402,
        })
    }catch(err){
        return response.status(500).json({
            message:err,
            status:500
        })
    }
}


module.exports = {getAllUsers,getUserById}