const ApiKey=`Enter your API Key`
async function fetchApi(city){
    try {
        const res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${ApiKey}`)
        if(!res.ok){
            throw new Error("unable to fetch from api")
        }
        const data= await res.json();
        update(data)
    } catch (error) {
        console.log(error);
    }
   
}
const City=document.querySelector("#cityname")
const Temp=document.querySelector("#temp")
const Type=document.querySelector("#type")
const Dates=document.querySelector("#date")
// fetchApi();
function update(data){
    City.textContent=data.name
    Temp.textContent=Math.round(data.main.temp)
    Type.innerHTML=data.weather[0].description
    const myDate=new Date()
    Dates.innerHTML=myDate.toDateString();
}
const d=document.getElementById("name")
d.addEventListener("dblclick",()=>{
    fetchApi(d.value)
    d.value=""
})

