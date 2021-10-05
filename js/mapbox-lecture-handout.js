"use strict";
/**********************************************
 * 			SETTING UP KEYS.JS
 *********************************************/
// TODO TOGETHER: Open .gitignore and add keys.js. Add keys.js file and import to mapbox html file. Your api keys are stored in keys.js and are added to the .gitignore so they are protected

/**********************************************
 * 			CUSTOMIZING THE MAP
 *********************************************/
// Predefined map styles --> https://docs.mapbox.com/mapbox-gl-js/api/#map
// A map center can be set by passing in the latitude and longitude coordinates of a location as an array [LONGITUDE_VALUE, LATITUDE_VALUE]
// Zoom levels range from 0 up to 24, with 0 being a global view and 24 being the most detailed at street level (the max zoom level depends on the location).

//TODO: Set map to the San Antonio area using the coordinates [-98.4861, 29.4252]

mapboxgl.accessToken = mapboxApiKey;  //paste your api key
console.log(mapboxApiKey);

var map = new mapboxgl.Map(
    {
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        zoom: 15,   //1 would be far away, 20 would be close
        center: [-98.4861, 29.4252]
    });


//TODO: Experiment with different map styles, zoom levels, and centers. You will need to reference the MapBox docs! (10 mins~)
// var map = new mapboxgl.Map(
//     {
//         container: "map",
//         style: "mapbox://styles/mapbox/streets-v11",
//         zoom: 12,   //1 would be far away, 20 would be close
//         center: [-84.2253120786325, 34.4531397630891]
//     });




/**********************************************
 * 					MARKERS
 *********************************************/
// Marker Docs --> https://docs.mapbox.com/mapbox-gl-js/api/#marker
// Markers are specific locations on a map
//Use the .setLngLat() and .addTo() methods to add marker to the map


// TODO TOGETHER: Add a marker to the map using the following coordinates [-98.4861, 29.4260]. This marker will mark the Alamo on our map.



// var marker = new mapboxgl.Marker()
//     .setLngLat([-98.4861, 29.4260])
//     .addTo(map);


// TODO TOGETHER: Change the color of the marker
var marker = new mapboxgl.Marker({color: "orange"})  //Marker is a method of mapboxgl. What are other methods
    .setLngLat([-98.4861, 29.4260])
    .addTo(map);


// TODO: Make a new marker! Let's experiment with the color and setting the LngLat [how about a marker for Codeup San Antone? -98.4895, 29.4267 Codeup Dallas? -96.8056, 32.7786]
// TODO: Update the marker object to make the marker draggable. *Hint: reference the docs!

// var greenMarker = new mapboxgl.Marker({color: "green", draggable: true})
//     .setLngLat([-98.4895, 29.4267])
//     .addTo(map);

var redMarker = new mapboxgl.Marker({color: "red", draggable: "true"})
    .setLngLat([-84.2253120786325, 34.4531397630891])
    .addTo(map);


/**********************************************
 * 					POPUPS
 *********************************************/
// Popups are the info boxes that appear on a map and may describe a given location.
// Popup docs --> https://docs.mapbox.com/mapbox-gl-js/api/#popup


// TODO TOGETHER: Add a popup to the map over San Antonio's Codeup. Set the html as a paragraph that says "Codeup Rocks!"
// var popup = new mapboxgl.Popup()
//     .setLngLat([-98.489615, 29.426827])
//     .setHTML("<p>Codeup Rocks!</p>")
//     .addTo(map)

// TODO TOGETHER: We'll comment out the popup we just added. Next, let's add a popup to the Alamo marker!

    // TODO: Review the popup docs. What are some additional options we can pass to the popup? Choose one and experiment with implementing that option to a popup!
// TODO: Try setting the text of a popup by using ".setText()" instead of ".setHTML()" - what happens with HTML tags between the two?
var alamoPopup = new mapboxgl.Popup({anchor: "left"})
    .setHTML("<p>Remember the Alamo!</p>")
    .addTo(map)

marker.setPopup(alamoPopup)  //marker is the variable name that we set earlier

//other things we can program...
alamoPopup.on("close" , function(){  //on is an event handler we learned during jquery lecture
    console.log("the popup was closed")
})





/**********************************************
 * 					Geocoder
 *********************************************/
// Geocoding Docs --> https://docs.mapbox.com/api/search/#geocoding
// TODO TOGETHER: Let's set up our mapbox-geocoder-utils.js!


// TODO TOGETHER: Using the Geocoder helper function, log the coordinates of Codeup and recenter the map to focus on Codeup.
//https://docs.mapbox.com/mapbox-gl-js/api/map/#map#setcenter
// ex. function call: geocode("San Antonio", API_TOKEN_HERE).then(function(results) {
//  *      // do something with results
//  *  })
geocode("San Antonio", mapboxApiKey).then(function(results) {
    console.log(results);
})

//TODO: Using the geocode method above, add a marker at Codeup to the map
geocode("600 Navarro St, #600, San Antonio, TX 78205", mapboxApiKey).then(function(results){
    var popUp = new mapboxgl.Popup()
        .setHTML("thanks Geocode")
    new mapboxgl.Marker()
        .setLngLat(results)
        .setPopup(popUp)
        .addTo(map)
})



//TODO: Instead of setCenter try using map.jumpTo()
//TODO: Instead of setCenter try using map.flyTo()
geocode("Portland, Maine", mapboxApiKey).then(function(results){
    var popUp = new mapboxgl.Popup()
        .setHTML("thanks Geocode")
    new mapboxgl.Marker()
        .setLngLat(results)
        .setPopup(popUp)
        .addTo(map)

        // map.flyTo({center: results})
})


// TODO TOGETHER: Reverse Geocoding: Using the reverse geocoding method, enter the coordinates {lng: -98.4861, lat: 29.4260} to get a physical address for the Alamo
// * EXAMPLE:
// *
// *  reverseGeocode({lat: 32.77, lng: -96.79}, API_TOKEN_HERE).then(function(results) {
// *      // do something with results
// *  })

// TODO: Reverse geocode coordinates of your choice using the reverse geocode method

reverseGeocode({lat: 29.4260, lng: -98.4861}, mapboxApiKey).then(function(results) {
     // do something with results
    console.log(results);
})

//Array forEach loop
let myArray = ["one", "two", "three", "four"];
myArray.forEach(function(element,index, items){  //or you can use value, index, array
    console.log(element);
    console.log(index);
    console.log(items);
});

var newArray = [{color: "red", draggable: "true"}, {color: "orange", draggable: "true"}, {color: "blue", draggable: "true"}]
