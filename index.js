

const apiKey="b6a721c28b9f60c4376ea62da43ed0b1";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

function search(){
    let cityji=document.getElementById("search-val").value;
    console.log(cityji)
    checkWeather(cityji);
}

async function checkWeather(key){
    const response = await fetch(apiUrl + `${key}&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
        let data=await response.json();
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".temp").innerHTML=data.main.temp+" C";
        document.querySelector(".wind").innerHTML=data.wind.speed+" Km/hr";
        let image = document.querySelector(".weather-icon");
        image.src=`images/${data.weather[0].main}.png`

        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";// to show something and none is used in place of block to hide something.
    }
    
}


// This is tyhe way to fetch api .