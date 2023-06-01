function weatherApp(){
    const button = document.getElementById("submit-button");

    button.addEventListener("click", function click(){
        const inputCity = document.getElementById("input-city-name").value;
        console.log(inputCity);
        
        getWeather(inputCity);
        clearText();
    })

    async function getWeather(city){
        const data = await fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast');
        const result = await data.json();
        console.log(result.properties.periods[1].shortForecast);
    }

    function clearText(){
        document.getElementById("input-city-name").value = "";
    }
};

export {weatherApp}