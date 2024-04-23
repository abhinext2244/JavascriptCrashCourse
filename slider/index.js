let myslides=document.querySelectorAll(".mySlides")
let Prev=document.querySelector(".prev")
let Next=document.querySelector(".next")
let startstop=document.querySelector(".startstop")
let imagecount=0
let slidshow=0
function imageslider(){
    for(let i=0;i<myslides.length;i++){
        myslides[i].style.display="none"
    }
    imagecount++
    if(imagecount>myslides.length){
        imagecount=1
    }
    myslides[imagecount-1].style.display="block"
}
startstop.addEventListener("click",function(){
    if(slidshow){
        clearInterval(slidshow)
        slidshow=null
        startstop.innerHTML="start"
    }else{
        slidshow=setInterval(imageslider,1000)
        startstop.innerHTML="stop"
    }
})
Prev.addEventListener("click",function(){
    clearInterval(slidshow)
    slidshow=null
    imagecount--
    for(let i=0;i<myslides.length;i++){
        myslides[i].style.display="none"
    }
    if(imagecount<0){
        imagecount=myslides.length-1
    }
    myslides[imagecount].style.display="block"
    // timerimage()
   
    
})
Next.addEventListener("click",function(){
    clearInterval(slidshow)
    slidshow=null
    imagecount++
    for(let i=0;i<myslides.length;i++){
        myslides[i].style.display="none"
    }
    if(imagecount>myslides.length-1){
        imagecount=0
    }
    myslides[imagecount].style.display="block"
    // timerimage()
   
})
function timerimage(){
    if(slidshow){
        clearInterval(slidshow)
        slidshow=null
        startstop.innerHTML="start"
            
        }else{
            slidshow=setInterval(imageslider,1000)
            startstop.innerHTML="stop"
        }
}
timerimage()

