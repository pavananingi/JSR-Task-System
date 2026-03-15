const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const authRoutes = require("./routes/authRoutes")
const taskRoutes = require("./routes/taskRoutes")
const calendarRoutes = require("./routes/calendarRoutes")
const adminRoutes = require("./routes/adminRoutes")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/jsr_system")
.then(()=>console.log("MongoDB Connected"))

app.use("/api/auth",authRoutes)
app.use("/api/tasks",taskRoutes)
app.use("/api/calendar",calendarRoutes)
app.use("/api/admin",adminRoutes)

app.listen(5000,()=>{
console.log("Server running on port 5000")
})
