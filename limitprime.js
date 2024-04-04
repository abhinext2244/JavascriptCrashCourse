function limitprimeNumber(n){
    if(n==0||n==1){
        return false
    }
    for(let i=2;i<n;i++){
        if(n%i==0){
            return false  
        }
    }
    return true
}
let n=100
for(let i=0;i<n;i++){
    if(limitprimeNumber(i)){
        console.log(i)
    }
}