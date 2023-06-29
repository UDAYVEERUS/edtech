const AWS = require('aws-sdk');
const fs = require('fs');
const dotenv=require('dotenv').config()
const AWSCredentials = {
    accessKey: process.env.accessKey,
    secret: process.env.secret,
    bucketName: process.env.bucketName
};
const s3 = new AWS.S3({
    accessKeyId: AWSCredentials.accessKey,
    secretAccessKey: AWSCredentials.secret
});
const uploadFiles = async (request, response, next) => {
    try {
        console.log("hehre")
        const file = request.files.files
        var files_uploaded_response = []
        if (file.length == undefined) {
            // single file
            // Setting up S3 upload parameters
            const params = {
                Bucket: AWSCredentials.bucketName,
                Key: `${file.name}`,
                ContentType: file.mimetype,
                Body: file.data
            };
            const data = await s3.upload(params).promise()

            request.pdf_url = files_uploaded_response.push(data.Location)
            // console.log(files_uploaded_response,"inside uplaod")
            return response.json(files_uploaded_response)
            // return next()
        }
        else {
            // multiple file
            var files_uploaded_response 
            Promise.all(file.map(async (value, index) => {
                const params = {
                    Bucket: AWSCredentials.bucketName,
                    Key: `${value.name}`,
                    ContentType: value.mimetype,
                    Body: value.data
                };
                const data = await s3.upload(params).promise()
                return data.Location
            })).then(data => {
                
                console.log(data)
                files_uploaded_response = data
                return response.json(files_uploaded_response)
                request.pdf_url = files_uploaded_response
                console.log(files_uploaded_response,"inside uplaod")
                // return next()
            })

        }
    } catch (Err) {
        console.log(Err)
        return response.status(200).json({
            status: 500,
            message: "server error"
        })
    }
}
module.exports = uploadFiles