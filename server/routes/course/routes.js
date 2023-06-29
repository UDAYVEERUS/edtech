const express = require("express")
// const uploadFiles = require("../upload/Upload")
const addCourse = require("./post/post")
const {getCourses,getCoursebyId}= require("./get/get")
const { deleteCourse} = require("./delete/delete")
const {updateCourse} = require("./patch/patch")
const router = express.Router()

router.post(
    "/addcourse",
    addCourse
)
router.get("/getcourses",getCourses)

router.get("/getcoursebyid/:id",getCoursebyId)

router.delete("/deletecourse/:id",deleteCourse)

router.patch("/updatecourse/:id",updateCourse)

module.exports = router