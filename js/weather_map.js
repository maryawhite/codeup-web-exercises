"use strict"
//console.log() inside of a .done() handler then check the console to see the data

//this is the call current api
$.get("https://api.openweathermap.org/data/2.5/weather", {
    APPID: openWeatherAppKey,
    q:     "Atlanta, GA US",
    units: "imperial",
}).done(function(data) {
    console.log(data);
    //insert code inside the .done
    var temperatureF = (data.main.temp).toFixed(1);

    $("#weather-main").html("<p>" + data.weather[0].main + "</p>");
    $("#temperature-value").html(temperatureF + "&#176;" + "<span>F</span>");
    $("#weather-icon").html('<img src="img/weather-icons/' + data.weather[0].icon + '.png" + />');
    $("#location").html(data.name);
    $("#wind-speed").html("Current Wind Speed: " + data.wind.speed);

    var celsius = ((temperatureF - 32) * 5/9).toFixed(1);
    function fahrenheitToCelsius(temperatureF){
        return celsius;
    }
    function celsiusToFahrenheit(celsius){
        return ((celsius * 9/5) + 32).toFixed(1);
    }

    $("#temperature-value").click(function(){
        $("#temperature-value").html(fahrenheitToCelsius(temperatureF) + "&#176;" + "<span>C</span>");
    });

    $("#purple-bg").click(function(){
        $("#temperature-value").html(celsiusToFahrenheit(celsius) + "&#176;" + "<span>F</span>");
    })
});

function convertDt(dtNum){
    const unixTimestamp = dtNum
    const milliseconds = unixTimestamp * 1000
    const dateObject = new Date(milliseconds)
    const humanDateFormat = dateObject.toLocaleString("en-US", {weekday: "long", month: "long", day: "numeric", year: "numeric"}) //2019-12-9 10:30:15
    return humanDateFormat;
}
//using the function instead of concatenating this in the forloop, new Date((data.daily[i].dt) * 1000).toLocaleString("en-US", {weekday: "long", month: "long", day: "numeric", year: "numeric"})

mapboxgl.accessToken = mapboxApiKey;  //paste your api key

var map = new mapboxgl.Map(
    {
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        zoom: 8,   //1 would be far away, 20 would be close
        center: [-84.250855892393,33.88110533623017]

    });

$("#userSearch").click(function(e){
    e.preventDefault();
    // $("#input-form").css("display", "none");

    let query = $("#searchValue").val(); // a string that was input
    var latitude = "";
    var longitude = "";
    geocode(query, mapboxApiKey).then(function(results){
        console.log(results);
        for(var i = 0; i < results.length; i++){
            if(i === 0){
                longitude += results[i];
            } else {
                latitude += results[i];
            }
        }
        var popUp = new mapboxgl.Popup()
            .setHTML("thanks Geocode")
       var myMarker = new mapboxgl.Marker({color: "black", rotation: 45, draggable: true})
            .setLngLat(results)
            .setPopup(popUp)
            .addTo(map)
        map.setZoom(12)
        map.jumpTo({center: results})
        console.log(query);

        //working on draggable marker
        var results = myMarker.getLngLat();
        var coordArr = Object.values(results)  //this puts it in an array
        console.log(results)
        console.log(coordArr)
        function onDragEnd() {
            const lngLat = myMarker.getLngLat();
            console.log(lngLat);
        }
        myMarker.on('dragend', onDragEnd);
        //end working on draggable marker

        //put onecall inside of geocode. this is the onecall api
        $.get("https://api.openweathermap.org/data/2.5/onecall", {
            APPID: openWeatherAppKey,
            lat: latitude,
            lon: longitude,
            units: "imperial",       //the default temperature is Kelvin, this changes it to F
            exclude: "minutely"
        }).done(function(data) {
            console.log(data);
            //insert code inside the .done
            // var forecast;
            for(var i = 0; i < 5; i++){ //or use data.daily.length for the 8 day forecast from the data
                var forecast = '<div class="card text-center text-nowrap mb-4"> <p class="card-header w-100 text-wrap">' + convertDt(data.daily[i].dt) + ' </p><div id="card5d" class="card-body w-100 pb-1"><img class="m-auto d-flex flex-column pb-2" src="img/weather-icons/' + data.daily[i].weather[0].icon + '.png"' + '<br> High/Low <br> ' + Math.round(data.daily[i].temp.max) + ' &#176; <span>F</span> / ' + Math.round(data.daily[i].temp.min) + ' &#176; <span>F</span> </div><div class="card-body w-100 pt-0"> ' + data.daily[i].weather[0].main + ' </div></div>'
                $("#five-day").append(forecast);
            }
        }); //end of .done for the one call

    });
});

//refresh button
$('#refresh-5day').click(function() {
    location.reload();
});



//how to convert C to F: temp in cel * 9/5 + 32. From tutorial from https://github.com/CodeExplainedRepo/Weather-App-JavaScript.

// this is from mapbox documentation test it out later
// map.on('click', (e) => {
//     e.preventDefault();
//     // document.getElementById('info').innerHTML =
// // `e.point` is the x, y coordinates of the `mousemove` event
// // relative to the top-left corner of the map.
//         var coord = JSON.stringify(e.point) + '<br />' + JSON.stringify(e.lngLat.wrap());
//     // `e.lngLat` is the longitude, latitude geographical position of the event.
// console.log(coord);
// });




