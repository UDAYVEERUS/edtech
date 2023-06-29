const Subject = require("../subjectSchema")
const addSubject =async(request,response,next)=>{
    try{
        
        const subjectResponse = await Subject.create(request.body)
        if(subjectResponse){
            return response.status(201).json({
                data:subjectResponse,
                status:201,
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
module.exports = addSubject