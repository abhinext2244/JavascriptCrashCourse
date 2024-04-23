
let button=document.querySelector("button")
button.addEventListener("click",function(){
    fetch("https://reqres.in/api/users") // fetch the user data from the Reqres API
.then((response)=>response.json()) // Parse the response
.then((data)=>{
    console.log(data.data)
    fetchuser(data.data)
})
.catch(error=>console.error('Error fetching users',error))//Handle Error
})
function fetchuser(users){
    let fetchUser=document.querySelector(".fetch-reqres")
users.forEach(element => {      //map the user data
    let div=document.createElement("div")
    div.className="userbox"
    let Name=document.createElement("p")
    let email=document.createElement("h3")
    Name=`Name: ${element.first_name} ${element.last_name}`
    let img=document.createElement("img")
    img.src=element.avatar
    email=`Email:${element.email}`
    div.append(Name,img,email)
    fetchUser.append(div)//append user data
});
}