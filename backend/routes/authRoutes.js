const express = require("express")
const router = express.Router()

const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const User = require("../models/User")

router.post("/register",async(req,res)=>{

const {username,email,password} = req.body

const hash = await bcrypt.hash(password,10)

const user = new User({
username,
email,
password:hash
})

await user.save()

res.json("User Registered")

})

router.post("/login",async(req,res)=>{

const {email,password} = req.body

const user = await User.findOne({email})

if(!user){
return res.json("User not found")
}

const valid = await bcrypt.compare(password,user.password)

if(!valid){
return res.json("Wrong password")
}

const token = jwt.sign(
{id:user._id,role:user.role,username:user.username},
"secretkey"
)

res.json({token,user})

})

module.exports = router
