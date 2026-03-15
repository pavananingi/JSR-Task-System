const API = "http://localhost:5000/api"

function register(){

fetch(API+"/auth/register",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

username:document.getElementById("username").value,
email:document.getElementById("email").value,
password:document.getElementById("password").value

})

})
.then(res=>res.json())
.then(data=>alert(data))

}

function login(){

fetch(API+"/auth/login",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

email:document.getElementById("email").value,
password:document.getElementById("password").value

})

})
.then(res=>res.json())
.then(data=>{

localStorage.setItem("token",data.token)
localStorage.setItem("user",JSON.stringify(data.user))

window.location="dashboard.html"

})

}

function toggleMenu(){

const menu = document.getElementById("sidebar")

if(menu.style.left=="0px"){
menu.style.left="-200px"
}else{
menu.style.left="0px"
}

}

function logout(){

localStorage.clear()

window.location="index.html"

}
