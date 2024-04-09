let name=["Rice", "Dal", "Salt"]
let quantity=[2, 3, 1]
let price=[60, 50, 20]
let data=[]
for(let i=0;i<name.length;i++){
 let obj={}
 obj.name=name[i]
 obj.qunatity=quantity[i]
 obj.price=price[i]
 data.push(obj)
}
let sum=0
for(let i=0;i<data.length;i++){
   sum=sum+ data[i].qunatity*data[i].price
}
console.log(sum)