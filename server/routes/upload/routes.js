const express = require("express")
const router = express.Router()
const fileupload = require("express-fileupload");
const uploadFiles = require("./Upload");
const uploadImage = require("./UploadImg");

router.use(express.json())

router.post("/",uploadFiles)

router.post("/image",uploadImage)

module.exports = router