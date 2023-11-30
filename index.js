

async function getWeather(){
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?units=metric&q=Mahabaleshwar,in&APPID=5e22af05e319187dc6b2e0df5c99ff3d");
    var data = await response.json();

    console.log(data);

    document.querySelector(".hdt").innerHTML = data.main.humidity+" %";
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+" °C";
    document.querySelector(".ws").innerHTML = data.wind.speed+" km/hr";

    if(data.weather[0].main == 'Clouds'){
        document.querySelector(".weather-icon").src = 'cloudy_sunny.png';
    }
    else if(data.weather[0].main == 'Clear'){
        document.querySelector(".weather-icon").src = 'sun.png';
    }
    else if(data.weather[0].main == 'Rain'){
        document.querySelector(".weather-icon").src = 'rain.png';
    }
    else{
        document.querySelector(".weather-icon").src = 'cloudy_sunny.png';
    }
}

getWeather();