"use strict"

$.get("http://api.openweathermap.org/data/2.5/weather", {
    APPID: openWeatherAppKey,
    q:     "San Antonio, US",
    units: "imperial"       //the default temperature is Kelvin, this changes it to F
}).done(function(data) {
    console.log(data);
});

