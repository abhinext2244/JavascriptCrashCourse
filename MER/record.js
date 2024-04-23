let Myform=document.querySelector("#form")
let Name=document.querySelector("#name")
let EmployeId=document.querySelector("#employeeID")
let Department=document.querySelector("#department")
let exp=document.querySelector("#exp")
let email=document.querySelector("#email")
let mbl=document.querySelector("#mbl")
var tbody = document.querySelector('tbody')
let arr=[]
Myform.addEventListener("submit",function(e){
    e.preventDefault()
   let  obj={}
    obj.name=Name.value
    obj.emp=EmployeId.value
    obj.dep=Department.value
    obj.exp=exp.value
    obj.email=email.value
    obj.mbl=mbl.value
    arr.push(obj)
    var tr1 = document.createElement('tr')
    var td1 = document.createElement('td')
    var td2 = document.createElement('td')
    var td3 = document.createElement('td')
    var td4 = document.createElement('td')
    var td5 = document.createElement('td')
    var td6 = document.createElement('td')
    var td7 = document.createElement('td')
    var td8 = document.createElement('td')
    var btn = document.createElement('button')
    btn.innerText = 'Delete'
    btn.style.borderRadius = '5px'
    if (obj.exp > 5) {
        td7.innerText = 'Senior'
    } else if (obj.exp >= 2 && obj.exp <= 5) {
        td7.innerText = "Junior"
    } else if (obj.exp <= 1) {
        td7.innerText = 'Fresher'
    }
    td1.innerText = obj.name
    td2.innerText = obj.EmployeId
    td3.innerText = obj.dep
    td4.innerText = obj.exp
    td5.innerText = obj.email
    td6.innerText = obj.mbl
    td8.appendChild(btn)
    // td8.style.backgroundColor="red"
    tr1.append(td1, td2, td3, td4, td5, td6, td7, td8)
    tbody.append(tr1)
    btn.addEventListener('click', function () {
        tr1.remove(); // Remove the row when the button is clicked
    })
})
console.log(arr)