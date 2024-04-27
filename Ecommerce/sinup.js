let form=document.querySelector('form')
function handleSubmit(event){
    event.preventDefault()
let formvalue=event.target
console.log(formvalue)
let name=formvalue[0].value
let email=formvalue[1].value
let password=formvalue[2].value
const obj={
    id:Math.floor(Math.random()*1000),
    name,
    email,
    password,
    
}
fetch("http://localhost:3000/users",{
    method:"POST",
    header:{
        "Content-Type":"application/json",
    },
    body:JSON.stringify(obj)
});
alert("Sinup Successfully")
}
form.addEventListener("submit",function(event){
    handleSubmit(event)
})