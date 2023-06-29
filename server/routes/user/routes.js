const express =  require("express")
const { addUser } = require("./post/post")
const {getAllUsers} = require("./get/get")
const { updateUser } = require("./patch/patch")
const { loginUser } = require("./post/login")
const router = express.Router()

router.post("/adduser",addUser)

router.get("/getallusers",getAllUsers)

router.patch("/updateuser/:id",updateUser)

router.post("/login",loginUser)

module.exports = router