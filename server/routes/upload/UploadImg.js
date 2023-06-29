const cloudinary = require("cloudinary").v2
const fileupload = require("express-fileupload")
fileupload({
    useTempFiles:false
})
cloudinary.config({
    cloud_name: 'dp8trmvci',
    api_key: '117143947831187',
    api_secret: 'NddM_fnk8jSrh8bi8u0QDdoV2Mk',
    secure: true
});
const uploadImage = async (request, response) => {
    const files = request.files.photo
    console.log(typeof files.length)
    if (typeof files.length === "undefined") {
        try{
        // Upload the image
        console.log("here single file",files,files.tempFilePath)
        const result = await cloudinary.uploader.upload(files.tempFilePath, {
            transformation: [
                { width: 600, crop: "scale" },
                { quality: "auto", fetch_format: "auto" }
            ]
        }, (err, result) => { });
        response.json(result)
        }
        catch(err){
            return response.status(500).json({
                message:err,status:500
            })
        }

    }
    if (typeof files.length !== "undefined") {
        // let images = []
        // Promise.all(files.map(async (file) => {
        //     const result = await cloudinary.uploader.upload(file.tempFilePath, {
        //         transformation: [
        //             { width: 600, crop: "scale" },
        //             { quality: "auto", fetch_format: "auto" }
        //         ]
        //     }, (err, result) => { });

        //     return result
        // })).then(result => {
        //     // images.push(result.map((data)=>{return data.secure_url}))
        //     response.json({ data: result })

        // })
        return response.status(402).json({
            message:"multiple image not allowed"
        })

    }

}

module.exports = uploadImage