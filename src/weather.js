function weatherApp(){
    const button = document.getElementById("submit-button");

    button.addEventListener("click", function click(){
        const inputCity = document.getElementById("input-city-name").value;
        console.log(inputCity);
        getLocation();
        clearText();
    })

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else { 
            // x.innerHTML = "Geolocation is not supported by this browser.";
            console.log("Error: Geolocation is not supported by this browser.")
        }	
    }
    function showPosition(position) {
        getWeather(position.coords.latitude, position.coords.longitude);
    }

    async function getWeather(latitude,longitude) {
        // const addCoords = `https://api.weather.gov/points/${latitude},${longitude}`;
        // const data = await fetch(addTude);
        const data = await fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast');
        const result = await data.json();
        console.log(result.properties.periods[1].shortForecast);
    }

    function clearText(){
        document.getElementById("input-city-name").value = "";
    }
};

export {weatherApp}