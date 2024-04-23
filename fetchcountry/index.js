fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries") //fetch the country data from api
.then((response)=>response.json())//Parse the response
.then((data)=>{
    // console.log(data.data)
    displaycountry(data.data) //display the data on screen
})
.catch(error=>console.error("Error fetching country",error))//Handle Error
let countrycard=document.querySelector(".country")
function displaycountry(countrydata){
countrydata.forEach(element => {
    let div=document.createElement("div")
    div.className="Cardcountry"
    let CountryName=document.createElement("h2")
    let Rank=document.createElement("h3")
    let Population=document.createElement("p")
    CountryName.innerText=`Country:${element.country}`
    Rank.innerText=`Rank:${element.Rank }`
    Population.innerText=`Popluation${element.population}`
    div.append(CountryName,Rank,Population)
    countrycard.append(div)
});
}
let HightoLow=document.querySelector(".popluationHightoLow")
HightoLow.addEventListener("click",function(){
    fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?sort=population&order=desc") //fetch the country data descending order
.then((response)=>response.json())
.then((ele)=>{
    console.log(ele.data)
    // ele.data.sort(function(a,b){
    //     return a.population-b.population
    // })
    countrycard.innerHTML=null
    displaycountry(ele.data)
})
.catch(error=>console.error("Error fetching country",error))
})