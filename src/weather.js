import {config} from './config.js';
function weatherApp(){
    const button = document.getElementById("submit-button");

    button.addEventListener("click", function click(){
        const inputCity = document.getElementById("input-city-name").value;
        getWeather(inputCity);
        clearText();
    })  

    async function getWeather(city) {
        const mykey = config.MY_KEY;
        const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=${mykey}=${city}`);
        const result = await data.json();
        
        displayWeather(result);
        console.log(result);
    }

    function displayWeather(result){
        document.getElementById("city-text").textContent = result.location.name + ", " + result.location.region;
        document.getElementById("temperature").textContent = result.current.temp_f + "°f";
        document.getElementById("weather-text").textContent = result.current.condition.text;
        // document.querySelector("img").src = result.current.condition.icon;
    }

    function clearText(){
        document.getElementById("input-city-name").value = "";
    }
};

export {weatherApp}