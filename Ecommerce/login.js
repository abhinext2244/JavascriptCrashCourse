let log=document.querySelector(".login")
log.addEventListener("click",function(){
    window.location.href="login.html"
})
let getData= async (URL)=>{
let res=await fetch(URL)
let data=await res.json()
// console.log(data)
 return data
}


let sName=document.querySelector(".Name")
let sEmail=document.querySelector(".Email")
let sPassword=document.querySelector(".Password")

      let form=document.querySelector("form")
      form.addEventListener("submit",async function(e){
        e.preventDefault()
        const UserDetails={
            Name:sName.value,
            Email:sEmail.value,
            Password:sPassword.value
        }
        let ele= await getData("http://localhost:3000/users")
        console.log("fetchdata",ele)
        let auth=ele.filter((user)=>{
          if( user.name==UserDetails.Name && user.email==UserDetails.Email && user.password==UserDetails.Password ){
              return user
          }
          console.log(ele)
        })
        console.log(auth)
       if(auth.length){
       localStorage.setItem("userName",JSON.stringify(UserDetails.Name))
       window.location.href="product.html"
        alert("login successfully")
       }else{
        alert("Wrong user ..")
       }
       
     })
    




