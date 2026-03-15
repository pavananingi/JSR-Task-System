const express = require("express")
const router = express.Router()

const User = require("../models/User")
const Task = require("../models/Task")
const Calendar = require("../models/Calendar")

router.get("/users",async(req,res)=>{

const users = await User.find()

res.json(users)

})

router.get("/user-data/:id",async(req,res)=>{

const tasks = await Task.find({userId:req.params.id})

const calendar = await Calendar.find({userId:req.params.id})

res.json({
tasks,
calendar
})

})

module.exports = router
