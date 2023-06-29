const Subject = require("../subjectSchema")
const patchSubject =async(request,response,next)=>{
    try{
        
        const subjectResponse = await Subject.findByIdAndUpdate(request.params.id,request.body)
        if(subjectResponse){
            return response.status(200).json({
                data:subjectResponse,
                status:200,
                message:"successfully added"
            })
        }
        return response.status(402).json({
            status:402,
            message:"Unable to add"+subjectResponse,
        })

    }catch(Err){
        return response.status(500).json({
            status:500+Err,
            message:"server Error",
        })
    }
}
module.exports = patchSubject