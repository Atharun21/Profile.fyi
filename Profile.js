let details=document.getElementById("details")
let username=localStorage.getItem("username")
let password=localStorage.getItem("password")

details.innerHTML=` <h1>User Name : ${username}</h1>
<br>
<br>
<h1>Password : ${password}</h1>
`


let logout=document.getElementById("logout")
logout.addEventListener("click",(e)=>{
    e.preventDefault()
    open("/Login.html","_self")
    // alert("Successfully Logged out")
})