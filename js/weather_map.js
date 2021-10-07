"use strict"

// $.get("http://api.openweathermap.org/data/2.5/weather", {
//     APPID: openWeatherAppKey,
//     // q:     "San Antonio, US", //you can use various keys to get the location, city, id, long/lat etc
//     lat: 29.423017,
//     lon: -98.48527,
//     units: "imperial"       //the default temperature is Kelvin, this changes it to F
// }).done(function(data) {
//     console.log(data);
// });
//Codeup: When you start exploring a new API, it is important to learn what data is sent back from each request. We can exploring this information using console.log() inside of a .done() handler:

//this is the onecall api, note that the url is different and the documentation is different, you can include different keys
    $.get("https://api.openweathermap.org/data/2.5/onecall", {
        APPID: openWeatherAppKey,
        // q:     "San Antonio, US", //you can use various keys to get the location, city, id, long/lat etc
        lat: 33.8823,
        lon: -84.2502,
        units: "imperial",       //the default temperature is Kelvin, this changes it to F
        exclude: "minutely"
    }).done(function(data) {
        console.log(data);
        //insert code inside the .done
        $("#weather-main").html("<p>" + data.daily[0].weather[0].main + "</p>");
        $("#temperature-value").html(Math.floor(data.current.temp) + "&#176;" + "<span>F</span>");
        $("#weather-icon").html('<img src="img/weather-icons/' + data.daily[0].weather[0].icon + '.png" + />');
        $("#location").html("Lat: " + data.lat + ",  Lon: " + data.lon);
        $("#wind-speed").html("Hourly Wind Speed: " + data.hourly[0].wind_speed);

//html = html + "<p>Weather: " + data.daily[0].weather[0].main + "</p>"
        //html = html + "<p>Temp: " + data.daily[0].temp.day + " F</p>"
        //             html = html + "<p>ICON</p>"
        //             html = html + "<p>Weather: " + data.daily[0].weather[0].main + "</p>"
        //             html = html + "<p>Humidity: " + data.daily[0].humidity + "</p>"
        //             html = html + "<p>Wind: " + data.daily[0].wind_speed + "</p>"
        //             html = html + "<p>Pressure: " + data.daily[0].pressure + "</p>"

        //$.ajax("data/blog.json").done(function(data){
        //     for(var i = 0; i < data.length; i++){
        //       var display = "<h3 class='mt-4'>" + data[i].title + "</h3>" + "<p>" + data[i].date + "</p>" + "<p>" + data[i].content + "</p>" + "<p class='categories d-inline'>" + "Categories: " + data[i].categories.join(",") + "</p>" + "<hr>"
        //       $("#posts").append(display)  //inside the for loop
        //     }
        //     // $("h3").addClass("mt-4");
        //     $("hr").css("border-bottom","2px solid");
        //   });

        ////how to calculate C to F  temp in cel * 9/5 + 32. Got this from tutorial from https://github.com/CodeExplainedRepo/Weather-App-JavaScript. Might use it later.
        // function celsiusToFahrenheit(temperature){
        //     return (temperature * 9/5) + 32;
        // }

    });

