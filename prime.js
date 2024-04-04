function PrimeNumber(n){
    if(n==0 || n==1){
        return false;
    }
     for(let i=2;i<n;i++){
        if(n%i==0){
          return false;
        }
     }
     return true
}

let n=11
    if(PrimeNumber(n)){
        console.log("Is Prime")
    }else{
        console.log("Not Prime")
    }
  

