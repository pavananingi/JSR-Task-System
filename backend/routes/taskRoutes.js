const express = require("express")
const router = express.Router()

const Task = require("../models/Task")

router.post("/add",async(req,res)=>{

const {task,userId} = req.body

const newTask = new Task({
task,
userId
})

await newTask.save()

res.json("Task Added")

})

router.get("/:userId",async(req,res)=>{

const tasks = await Task.find({userId:req.params.userId})

res.json(tasks)

})

router.delete("/:id",async(req,res)=>{

await Task.findByIdAndDelete(req.params.id)

res.json("Deleted")

})

module.exports = router
