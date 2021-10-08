"use strict"
//Codeup: When you start exploring a new API, it is important to learn what data is sent back from each request. We can exploring this information using console.log() inside of a .done() handler:

//this is the call current api, note that the url is different and the documentation is different, you can include different keys
$.get("https://api.openweathermap.org/data/2.5/weather", {
    APPID: openWeatherAppKey,
    q:     "Atlanta, GA US", //you can use various keys to get the location, city, id, long/lat etc
    // lat: 33.8823,
    // lon: -84.2502,
    units: "imperial",       //the default temperature is Kelvin, this changes it to F
}).done(function(data) {
    console.log(data);
    //insert code inside the .done
    $("#weather-main").html("<p>" + data.weather[0].main + "</p>");
    $("#temperature-value").html(Math.floor(data.main.temp) + "&#176;" + "<span>F</span>");
    $("#weather-icon").html('<img src="img/weather-icons/' + data.weather[0].icon + '.png" + />');
    $("#location").html(data.name);
    $("#wind-speed").html("Current Wind Speed: " + data.wind.speed);

});



//this is the onecall api, note that the url is different and the documentation is different, you can include different keys
    $.get("https://api.openweathermap.org/data/2.5/onecall", {
        APPID: openWeatherAppKey,
        lat: 33.8823,
        lon: -84.2502,
        units: "imperial",       //the default temperature is Kelvin, this changes it to F
        exclude: "minutely"
    }).done(function(data) {
        console.log(data);
        //insert code inside the .done
        // var forecast;
        for(var i = 0; i < 5; i++){ //or use data.daily.length for the 8 day forecast from the data
            var forecast = '<div class="card text-center text-nowrap mb-4"> <div class="card-header w-100">' + new Date((data.daily[i].dt) * 1000).toLocaleString("en-US", {weekday: "long"}) + ' </div><div class="card-body w-100"> High/Low <br> ' + Math.floor(data.daily[i].temp.max) + ' &#176; <span>F</span> / ' + Math.floor(data.daily[i].temp.min) + ' &#176; <span>F</span> </div><div class="card-body w-100 pt-0"> ' + data.daily[i].weather[0].main + ' </div></div>'
            $("#five-day").append(forecast);
        }
        ////how to calculate C to F  temp in cel * 9/5 + 32. Got this from tutorial from https://github.com/CodeExplainedRepo/Weather-App-JavaScript. Might use it later.
        // function celsiusToFahrenheit(temperature){
        //     return (temperature * 9/5) + 32;
        // }
    });

mapboxgl.accessToken = mapboxApiKey;  //paste your api key

var map = new mapboxgl.Map(
    {
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        zoom: 8,   //1 would be far away, 20 would be close
        center: [-84.250855892393,33.88110533623017]
    });

