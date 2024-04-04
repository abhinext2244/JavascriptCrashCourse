function smallCase(char){
    let S="abcdefghijklmnopqrstuvwxyz"
    for(let i=0;i<S.length;i++){
        if(char==S[i]){
            return true
        }
       
    }
    return false
   
}
let h="Z"
if(smallCase(h)){
    console.log("Small Case")
}else{
    console.log("Not Small Case")
}
