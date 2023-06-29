const express = require("express")
const router = express.Router()
const addBlog = require("./post/post")
const {getBlogs,getBlogsById, getAllBlogsForDashboard}=require("./get/get")
const { deleteBlogs } = require("./delete/delete")
const {updateBlog}= require("./patch/patch")
router.post("/addblog",addBlog)

router.get("/all",getBlogs)
router.get("/all/dashboard",getAllBlogsForDashboard)

router.get("/get/:id",getBlogsById)

router.delete("/delete/:id",deleteBlogs)

router.patch("/updateblog/:id",updateBlog)

module.exports = router