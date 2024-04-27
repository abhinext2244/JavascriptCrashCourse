let getData= async (URL)=>{
let response=await fetch(URL)
let data=await response.json()
// console.log(data)
DisplayProduct(data)
}
getData("http://localhost:3000/products")
let userName=document.querySelector(".username")
let user=JSON.parse(localStorage.getItem("userName"))
userName.innerHTML=`userName:${user}`
async function userfound(){
   let found= await fetch("http://localhost:3000/allUsersCart").then((res)=> res.json()).then((data)=>data)
   console.log(found)
   if(found[user]==undefined){
      found[user]=[]
   }

   
}
userfound()
  async function addtocart(ele){

const obj={
   id:ele.id,
   img:ele.src,
   title:ele.title,
   price:ele.price,
   rating:ele.ratings
}
let allUsersCartData= await fetch("http://localhost:3000/allUsersCart").then((res)=> res.json()).then((data)=>data)
console.log(allUsersCartData)
if(allUsersCartData[user]==undefined){
   allUsersCartData[user]=[]
   allUsersCartData[user].push(obj)
}else{

   allUsersCartData[user].push(obj)
}
console.log(allUsersCartData[user])
try {
    fetch('http://localhost:3000/allUsersCart',{
      method:"PUT",
      header:{
         "Content-Type":"appliction/json",
      },
      body:JSON.stringify(allUsersCartData)
       
   })

} catch (error) {
   console.log(error)
}

  }
  async function handleDelete(ele){
   console.log(ele.id)
      let deleteUser= await fetch("http://localhost:3000/allUsersCart").then((res)=> res.json()).then((data)=>data)
         console.log(deleteUser[user])
      let available=true
     deleteUser[user].forEach((element) => {
        if(ele.id==element.id){
         available=false
        }
     });
     if(available){
      alert("This product is not added in the cart section.")
      return
     }
     const newData= deleteUser[user].filter((ele1)=>{
         if(ele1.id!=ele.id){
            return ele1
         }
        
      })
     
     deleteUser[user]=newData

   fetch(`http://localhost:3000/allUsersCart`,{
      method:"PUT",
      header:{
         "Content-Type":"appliction/json",
      },
      body:JSON.stringify(deleteUser)
       
   })

   
   
  }

let CardProduct=document.querySelector(".productCard")
function DisplayProduct(data){
 data.map((ele)=>{
    let div=document.createElement("div")
    let img=document.createElement("img")
    let title=document.createElement("p")
    let price=document.createElement("p")
    let rating=document.createElement("p")
    let addbutton=document.createElement("button")
    let deletebutton=document.createElement("button")
    addbutton.innerHTML="add to cart"
    addbutton.onclick=function(e){
      e.preventDefault()
         addtocart(ele)
    }
    deletebutton.onclick=function(e){
       e.preventDefault()
       handleDelete(ele)
    }
    deletebutton.innerHTML="delete to cart"
    img.src=ele.src
    img.style.width="200px"
    img.style.height="100px"
    title.innerHTML=ele.title
    price.innerHTML=`₹${ele.price}`
    rating.innerHTML=`${ele.ratings}stars`;
    div.className="product"
    div.append(img,title,price,rating,addbutton,deletebutton)
    CardProduct.append(div)
 })
}

