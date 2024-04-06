// Task 1
let numbersArray = [2,3,7,8,10.13,15,18,34,25]
   let arr=numbersArray.map((e)=>{
     return e*2
  })
  console.log(arr)
//   Task 2
  let filter=numbersArray.filter((e)=>e%2==0)
  console.log(filter)
// task 3
  let reduce=numbersArray.reduce((acc,currentValue)=>acc+currentValue
  )
  console.log(reduce)