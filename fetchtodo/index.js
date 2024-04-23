let todo=document.querySelector(".todos")
let button=document.querySelector("button")
button.addEventListener("click",function(){
    fetch("https://jsonplaceholder.typicode.com/todos") //fetch the data from backend Api
     .then((res)=>res.json())  // Parse the JSON response
    .then((data)=>{
        console.log(data)
        data.map((ele)=>{//data map each item
            let div=document.createElement("div") //create div element
            div.className="todo" //create class todo
            let title=document.createElement("p") //create title element 
            let input=document.createElement("INPUT") //create input box
            input.setAttribute("type","checkbox")  //set attribbute checkbox
            input.checked=ele.completed
            title.innerText=ele.title
            div.append(title ,input) //append the data div element
            todo.append(div) // append the data parent element
        })
    })
   
})
