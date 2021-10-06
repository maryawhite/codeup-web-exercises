"use strict"
//begin populating the html
var notificationElement = document.querySelector(".notification");
var iconElement = document.querySelector(".weather-icon");
var tempElement = document.querySelector(".temperature-value p");
var descElement = document.querySelector(".temperature-description p");
var locationElement = document.querySelector(".location p");

//store the weather data in an object
const weather = {
    temperature : {
        value: 18,
        unit : "celsius"
    },
    description : "partly cloudy",
    iconId: "01d",
    city: "London",
    country: "GB"
};

//to update the html, we will update the innerhtml of each element
iconElement.innerHTML = '<img src="img/weather-icons/' + weather.iconId + '.png" + />'
tempElement.innerHTML = weather.temperature.value + "&#176;" + "<span>C</span>";
descElement.innerHTML = weather.description;
locationElement.innerHTML = weather.city + ", " + weather.country;


//how to calculate C to F  temp in cel * 9/5 + 32
function celsiusToFahrenheit(temperature){
    return (temperature * 9/5) + 32;
}


//add an event listener so that when the user clicks the temp it will change from C to F
tempElement.addEventListener("click", function(){
    if(weather.temperature.value === undefined) return;   //this line of code will prevent the rest of the code from running if the temp value is undefined
    if(weather.temperature.unit === "celsius"){
        let fahrenheit = celsiusToFahrenheit(weather.temperature.value);    //this is stored in the weather object
        fahrenheit = Math.floor(fahrenheit);    //use math.floor to round to the integer not 86.3354
        tempElement.innerHTML = fahrenheit + "&#176;" + "<span>F</span>";
        weather.temperature.unit = "fahrenheit";    //update the weather.temperature.unit to F
    } else {
        tempElement.innerHTML = weather.temperature.value + "&#176;" + "<span>C</span>";
        weather.temperature.unit = "celsius";
    }
})

if("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError); //create these 2 functions below
} else {
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser doesn't support Geolocation.</p>"
}

function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    getWeather(latitude, longitude);   //create a function below, the info will come from OpenWeatherMap API
}

function showError(error){
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>" + error.message + "</p>";
}

const kelvin = 273;

function getWeather(latitude, longitude){
    let api = "http://api.openweathermap.org/data/2.5/weather?lat=latitude&lon=longitude&appid=openWeatherAppKey";
    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data){
            weather.temperature.value = Math.floor(data.main.temp - kelvin);
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
        })
        .then(function(){
            displayWeather();  //create the function below
        });
}

//display weather function
function displayWeather(){
    iconElement.innerHTML = '<img src="img/weather-icons/' + weather.iconId + '.png" + />'
    tempElement.innerHTML = weather.temperature.value + "&#176;" + "<span>C</span>";
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = weather.city + ", " + weather.country;
}







