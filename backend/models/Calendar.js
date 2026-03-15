const mongoose = require("mongoose")

const CalendarSchema = new mongoose.Schema({

userId:String,

date:String,

data:Array

})

module.exports = mongoose.model("Calendar",CalendarSchema)
