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

    $("#weather-main").html("<p>" + data.weather[0].main + '/' + capitalizeFirstLetter(data.weather[0].description) + "</p>");
    $("#current-humidity").html("Humidity: " + data.main.humidity + '&#37;');
    $("#temperature-value").html(temperatureF + "&#176;" + "<span class='fah'>F</span>");
    $("#weather-icon").html('<img src="img/weather-icons/' + data.weather[0].icon + '.png" + />');
    $("#location").html(data.name);
    $("#wind-speed").html("Current Wind Speed: " + data.wind.speed);

    function capitalizeFirstLetter(input){
        var newString = input.split(" ");    //this splits it into an array at the space ['first', 'last']
        for(var i = 0; i < newString.length; i++){
            newString[i] = newString[i][0].toUpperCase() + newString[i].substring(1);  //this capitalizes index 0 and concats the rest of the string from index 1 to end
        }
        return newString.join(" ");
    }

    var celsius = ((temperatureF - 32) * 5/9).toFixed(1);

    function fahrenheitToCelsius(temperatureF){
        return ((temperatureF - 32) * 5/9).toFixed(1);
    }
    function celsiusToFahrenheit(celsius){
        return ((celsius * 9/5) + 32).toFixed(1);
    }

    $("#temperature-value").click(function(){
        var fah = $(".fah")
        if(data.main.temp === "undefined") return; //this will keep the rest of the code from running if the temp is undefined
        if (fah.text() === "F") {
            var temperatureF = (data.main.temp).toFixed(1);
            $("#temperature-value").html(fahrenheitToCelsius(temperatureF) + "&#176;" + "<span class='fah'>C</span>").css("color", "blue");
        } else if(fah.text() === "C"){
            $("#temperature-value").html(celsiusToFahrenheit(celsius) + "&#176;" + "<span class='fah'>F</span>").css("color", "red");
        }
    });

});

function convertDt(dtNum){
    const unixTimestamp = dtNum
    const milliseconds = unixTimestamp * 1000
    const dateObject = new Date(milliseconds)
    const humanDateFormat = dateObject.toLocaleString("en-US", {weekday: "short", month: "short", day: "numeric", year: "numeric"}) //2019-12-9 10:30:15
    return humanDateFormat;
}
//using the function instead of concatenating this in the forloop, new Date((data.daily[i].dt) * 1000).toLocaleString("en-US", {weekday: "long", month: "long", day: "numeric", year: "numeric"})

mapboxgl.accessToken = mapboxApiKey;  //paste your api key

var map = new mapboxgl.Map(
    {
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        zoom: 8,   //1 would be far away, 20 would be close
        center: [-84.250855892393, 33.88110533623017]

    });

new mapboxgl.Marker({color: "black", rotation: 45, draggable: true})
    .setLngLat([-84.2502, 33.8823])
    .addTo(map)
map.setZoom(8)


$("#userSearch").click(function(e){
    e.preventDefault();
    let query = $("#searchValue").val(); // a string that was input
    geocode(query, mapboxApiKey).then(function(results){
        console.log(results);
        var popUp = new mapboxgl.Popup()
            .setHTML("Hello!")
       var myMarker = new mapboxgl.Marker({color: "blue", rotation: 45, draggable: true})
            .setLngLat([results[0], results[1]])
            .setPopup(popUp)
            .addTo(map)
        map.setZoom(12)
        map.jumpTo({center: results})
        console.log(query);

        //draggable marker
        var results = myMarker.getLngLat();
        var coordArr = Object.values(results)  //this puts it in an array
        console.log(results)
        console.log(coordArr)
        function onDragEnd() {
            const lngLat = myMarker.getLngLat();
            console.log(lngLat);
            var newlngLat = Object.values(lngLat);
            console.log(newlngLat);

            //test a reverse geocode
            var newLngLat = Object.values(lngLat);
            console.log(lngLat);
            console.log(newLngLat);
                reverseGeocodeRef(lngLat, mapboxApiKey).then(function(refresults){
                    console.log(refresults);


            $.get("https://api.openweathermap.org/data/2.5/onecall", {
                APPID: openWeatherAppKey,
                lat: newlngLat[1],
                lon: newlngLat[0],
                units: "imperial",       //the default temperature is Kelvin, this changes it to F
                exclude: "minutely"
            }).done(function(data) {
                console.log(data);
                var forecast = "";
                for(var i = 0; i < 5; i++) { //or use data.daily.length for the 8 day forecast from the data
                    forecast += '<div class="card text-center text-nowrap mb-4 shadow-sm"> <p class="card-header w-100 text-wrap">' + convertDt(data.daily[i].dt) + ' </p><div id="card5d" class="card-body w-100 pb-1"><img class="m-auto d-flex flex-column pb-2" src="img/weather-icons/' + data.daily[i].weather[0].icon + '.png"' + '<br> High/Low </div><div id="temp-max-min"> ' + Math.round(data.daily[i].temp.max) + ' &#176; <span class="fahr">F</span> / ' + Math.round(data.daily[i].temp.min) + ' &#176; <span class="fahr">F</span></div> <div class="card-body w-100 pt-0"> ' + data.daily[i].weather[0].main + "/" + capitalizeFirstLetter(data.daily[i].weather[0].description) + "<br> Humidity: " + data.daily[i].humidity + '&#37;' + '<div class="small text-wrap">' + refresults + '</div> </div> </div>'
                }

                    $("#five-day").html(forecast);

                //**the code below does not work exactly how I want at the moment. It should traverse through each temp-max-min div and convert the temperature. I need to look into how to traverse**
                //     var tempFMax = Math.round(data.daily[i].temp.max)
                //     var tempFMin = Math.round(data.daily[i].temp.min)
                //     var celsiusMax = Math.round((tempFMax[i] - 32) * 5 / 9);
                //     var celsiusMin = Math.round((tempFMin[i] - 32) * 5 / 9);
                //
                //     function fahrenheitToCelsiusMax(tempFMax) {
                //         return Math.round((tempFMax - 32) * 5 / 9);
                //     }
                //
                //     function fahrenheitToCelsiusMin(tempFMin) {
                //         return Math.round((tempFMin - 32) * 5 / 9);
                //     }
                //
                //     function celsiusToFahrenheitMax(celsiusMax) {
                //         return Math.round((celsiusMax * 9 / 5) + 32);
                //     }
                //
                //     function celsiusToFahrenheitMin(celsiusMin) {
                //         return Math.round((celsiusMin * 9 / 5) + 32);
                //     }
                //
                //     $("#temp-max-min").click(function () {
                //         // var updatedCodeMax = ""; //can I create a var up here outside of the each loop to save my html content for the if statement
                //         // var updatedCodeMin = "";
                //         var fahr = $(".fahr");
                //         $("#temp-max-min").each(function(index, element){
                //             console.log("element" + element);
                //
                //             console.log(fahr.text()[i]);  //F
                //             if (data.daily[i].temp.max === "undefined") return; //this will keep the rest of the code from running if the temp is undefined
                //             if (fahr.text()[i] === "F") {
                //             var tempFMax = Math.round((data.daily[i].temp.max));
                //             var tempFMin = Math.round((data.daily[i].temp.min));
                //             $("#temp-max-min").html(fahrenheitToCelsiusMax(tempFMax) + "&#176; <span class='fahr'>C</span> /" + fahrenheitToCelsiusMin(tempFMin) + ' &#176; <span class="fahr">C</span>').css("color", "blue");
                //         } else if (fahr.text()[i] === "C") {
                //             $("#temp-max-min").html(celsiusToFahrenheitMax(celsiusMax) + "&#176; <span class='fahr'>F</span> /" + celsiusToFahrenheitMin(celsiusMin) + ' &#176; <span class="fahr">F</span>').css("color", "red");
                //         }
                //         });
                //     });
                    //** **

                function capitalizeFirstLetter(input){
                    var newString = input.split(" ");    //this splits it into an array at the space
                    for(var i = 0; i < newString.length; i++){
                        newString[i] = newString[i][0].toUpperCase() + newString[i].substring(1);  //this capitalizes index 0 and concats the rest of the string from index 1 to end
                    }
                    return newString.join(" ");
                }
            }); //end of test a reverse geocode
            }); //end of .done for the one call
        }
        myMarker.on('dragend', onDragEnd);
        //end working on draggable marker

        //put onecall inside of geocode. this is the onecall api again
        $.get("https://api.openweathermap.org/data/2.5/onecall", {
            APPID: openWeatherAppKey,
            lat: coordArr[1],
            lon: coordArr[0],
            units: "imperial",       //the default temperature is Kelvin, this changes it to F
            exclude: "minutely"
        }).done(function(data) {
            console.log(data);
            // var forecast;
            for(var i = 0; i < 5; i++){ //or use data.daily.length for the 8 day forecast from the data
                var tempFMax = Math.round((data.daily[i].temp.max));
                var tempFMin = Math.round((data.daily[i].temp.min));
                var forecast = '<div class="card text-center text-nowrap mb-4"> <p class="card-header w-100 text-wrap">' + convertDt(data.daily[i].dt) + ' </p><div id="card5d" class="card-body w-100 pb-1"><img class="m-auto d-flex flex-column pb-2" src="img/weather-icons/' + data.daily[i].weather[0].icon + '.png"' + '<br> High/Low </div><div id="temp-max-min"> ' + tempFMax + ' &#176; <span class="fahr">F</span> / ' + tempFMin + ' &#176; <span class="fahr">F</span></div> <div class="card-body w-100 pt-0"> ' + data.daily[i].weather[0].main + '/' + capitalizeFirstLetter(data.daily[i].weather[0].description) + "<br> Humidity: " + data.daily[i].humidity + '&#37;' +' </div></div>'
                $("#five-day").append(forecast);
            }

            function capitalizeFirstLetter(input){
                var newString = input.split(" ");    //this splits it into an array at the space ['first', 'last']
                for(var i = 0; i < newString.length; i++){
                    newString[i] = newString[i][0].toUpperCase() + newString[i].substring(1);  //this capitalizes index 0 and concats the rest of the string from index 1 to end
                }
                return newString.join(" ");
            }

        }); //end of .done for the one call

    });
});

//refresh button
$('#refresh-5day').click(function() {
    location.reload();
});



//move this into the .done when ready. not ready
//
// var celsiusMax = Math.round((tempFMax - 32) * 5/9);
// var celsiusMin = Math.round((tempFMin - 32) * 5/9);
// function fahrenheitToCelsiusMax(tempFMax){
//     return Math.round((tempFMax - 32) * 5/9);
// }
// function fahrenheitToCelsiusMin(tempFMin){
//     return Math.round((tempFMin - 32) * 5/9);
// }
// function celsiusToFahrenheitMax(celsiusMax){
//     return Math.round((celsiusMax * 9/5) + 32);
// }
// function celsiusToFahrenheitMin(celsiusMin){
//     return Math.round((celsiusMin * 9/5) + 32);
// }
//
// $("#temp-max-min").click(function(){
//     var fahr = $(".fahr")
//     console.log(fahr.text());  //F
//
//     if(data.daily[i].temp.max === "undefined") return; //this will keep the rest of the code from running if the temp is undefined
//     if (fahr.text() === "F") {
//         var tempFMax = Math.round((data.daily[i].temp.max));
//         var tempFMin = Math.round((data.daily[i].temp.min));
//         $("#temp-max-min").html(fahrenheitToCelsiusMax(tempFMax) + "&#176; <span class='fahr'>C</span> /" + fahrenheitToCelsiusMin(tempFMin) + ' &#176; <span class="fahr">C</span>');
//     } else if (fahr.text() === "C") {
//         $("#temp-max-min").html(celsiusToFahrenheitMax(celsiusMax) + "&#176; <span class='fahr'>F</span> /" + celsiusToFahrenheitMin(celsiusMin) + ' &#176; <span class="fahr">F</span>');
//     }
// });

//how to convert C to F: temp in cel * 9/5 + 32. From tutorial from https://github.com/CodeExplainedRepo/Weather-App-JavaScript.


