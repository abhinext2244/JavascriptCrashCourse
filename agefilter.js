let name=["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"]
let age=[32, 30, 26, 28, 44]
let data=[]
for (let i=0;i<name.length;i++){
    obj={}
    obj.name=name[i]
    obj.age=age[i]
    data.push(obj)
}
let agename=''
for(let i=0;i<data.length;i++){
    if(data[i].age>30){
        agename=agename+data[i].name+" "
    }
}
console.log(agename)