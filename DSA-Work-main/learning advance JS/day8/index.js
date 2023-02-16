let key='d0a71f0036639949985e3179ba936e62';
let container=document.getElementById("container");
let map=document.getElementById("gmap_canvas")
let data;
async function getdata(){
    try{
        let city=document.getElementById("input").value;
        let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        data=await res.json()
        appenddata(data)
        console.log(data);
    }catch(err){
        console.log("err:-",err);
    }
    
    function appenddata(data){
        container.innerHTML=null;
        let name=document.createElement("p");
        name.innerHTML=`City name:-${data.name}`;
        let min_temp=document.createElement("p");
        min_temp.innerHTML=`min temp:-${data.main.temp_min}`;
        let max_temp=document.createElement("p");
        max_temp.innerHTML=`max temp:-${data.main.temp_max}`;
        let wind=document.createElement("p");
        wind.innerHTML=`wind speed:-${data.wind.speed}`;
        let cloud=document.createElement("p");
        cloud.innerHTML=`cloud:-${data.clouds.all}`;
        let sunrise=document.createElement("p");
        sunrise.innerHTML=`sunrise:-:-${data.sys.sunrise}`;
        let sunset=document.createElement("p");
        sunset.innerHTML=`min temp:-${data.sys.sunset}`;
        container.append(name,min_temp,max_temp,wind,cloud,sunrise,sunset);
        map.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

    }
}