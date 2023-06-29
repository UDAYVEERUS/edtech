const user = require("../userSchema")

const addUser = async(request,response,next)=>{
    try{   
        const user_response = await user.create(request.body)
        if(user_response){
            return response.status(201).json({
                data:user_response,
                message:"users created",
                status:201
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

module.exports = {addUser}