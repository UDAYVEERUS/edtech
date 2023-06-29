const express = require("express")
const addSubject = require("./post/post")
const {getSubjectCourseById} = require("./get/getbycourseid")
const patchSubject = require("./patch/patch")
const router = express.Router()

router.post(
    "/addsubject",
    addSubject
)

router.get(
    "/getsubjectsbyid/:course_id",
    getSubjectCourseById
    
)

router.patch(
    "/updatesubject/:id",
    patchSubject
)

module.exports = router