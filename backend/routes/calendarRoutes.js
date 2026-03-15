const express = require("express")
const router = express.Router()

const Calendar = require("../models/Calendar")

router.post("/save",async(req,res)=>{

const {userId,date,data} = req.body

let entry = await Calendar.findOne({userId,date})

if(entry){

entry.data = data
await entry.save()

}else{

entry = new Calendar({
userId,
date,
data
})

await entry.save()

}

res.json("Saved")

})

router.get("/:userId/:date",async(req,res)=>{

const entry = await Calendar.findOne({
userId:req.params.userId,
date:req.params.date
})

res.json(entry)

})

module.exports = router
