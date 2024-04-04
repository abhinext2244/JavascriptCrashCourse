function NonPrimeNumber(n){
    if(n==0||n==1){
        return false
    }
    if(n==2){
        return true
    }
    for(let i=2;i<n;i++){
        if(n%i==0){
            return true
        }
    }
    return false
}
let n=100
for(let i=0;i<n;i++){
    if(NonPrimeNumber(i)){
        console.log(i)
    }
}