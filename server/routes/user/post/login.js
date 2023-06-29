const user = require("../userSchema")
const loginUser = async(request,response,next)=>{
    try{
        console.log(request.body)
        const {name,email}=request.body
        const user_response = await user.find({email:email})
        console.log(user_response.name===name,user_response)
        if(user_response[0].name===name){
            return response.status(200).json({
                data:user_response[0],
                message:"Successfully Login",
                status:200
            })
         
        }
        return response.status(402).json({
            message:"unable to login",
            status:402,
        })
    }catch(err){
        return response.status(500).json({
            message:err,
            status:500
        })
    }
}

module.exports = {loginUser}