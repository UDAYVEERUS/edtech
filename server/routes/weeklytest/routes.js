const express = require("express")
const { deleteTest } = require("./delete/delete")
const { getTest ,getTestById } = require("./get/get")
const { patchTest } = require("./patch.js/patch")
const { addWeeklyTest } = require("./post/post")
const router = express.Router()

router.post("/addtest",
    addWeeklyTest
)

router.patch("/update/:test_id",
patchTest
)

router.delete("/delete/:test_id",deleteTest)

router.get("/getalltest",getTest)

router.get("/getbyid/:test_id",getTestById)

router.get(
    "/checktest/:test_id",
    getTestById,
    (req,res)=>{return res.json("check")}
)

module.exports =  router