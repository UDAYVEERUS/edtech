const weeklyTest = require("../weeklyTestSchema")
const addWeeklyTest  = async(request,response,next)=>{
    try{
        const weekly_test_response = await weeklyTest.create(request.body)
        if(weekly_test_response){
            return response.status(201).json({
                data:weekly_test_response,
                message:"successfully fetched",
                status:200
            })
        }
        return response.status(402).json({
            message:"unable to progress",
            status:402
        })
    }
    catch(err){
        return response.status(500).json({
            message:"unable to progress",
            status:500
        })
    }
}
module.exports = {addWeeklyTest}