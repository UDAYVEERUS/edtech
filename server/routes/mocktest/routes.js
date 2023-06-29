const express = require("express")
const {getAllQuestion,getOnlyQuestion, getQuestionsByCourse,getQuestionsBySubCourse} = require("./get/get")
const addQuestion = require("./post/post")
const { checkAnswers } = require("./verification/verification")
const {deleteMockTestQuestion}  =require("./delete/delete")
const updateQuestion = require("./patch/patch")
const router = express.Router()

router.post("/addquestion",
    addQuestion
)

router.get("/getallquestion",
getAllQuestion
)

router.get("/getonlyquestion",
getOnlyQuestion
)

router.get(
    "/getquestionbycourse/:course_id",
    getQuestionsByCourse
)


router.get(
    "/getquestionbysubcourse/:course_id/:subject_id",
    getQuestionsBySubCourse
)
router.post("/checkanswer",checkAnswers)


router.delete(
    "/deletequestion/:id",
    deleteMockTestQuestion
    
)


router.patch("/update",
    updateQuestion
)
module.exports =  router