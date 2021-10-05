"use strict"
mapboxgl.accessToken = mapboxApiKey;  //paste your api key

var map = new mapboxgl.Map(
    {
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        zoom: 10,   //1 would be far away, 20 would be close
        center: [-84.250855892393,33.88110533623017]
    });
map.setZoom(10);
map.setStyle("mapbox://styles/mapbox/navigation-day-v1")

// var marker = new mapboxgl.Marker()
//     .setLngLat([-98.4861, 29.4260])
//     .addTo(map);

//create a marker on the exact location of your favorite restaurant
var mcdMarker = new mapboxgl.Marker({color: "red"})
    .setLngLat([-84.25454735410067, 33.88677041009587])
    .setPopup(new mapboxgl.Popup().setHTML("<p>McDonalds</p>"))
    .addTo(map)

var dunkinMarker = new mapboxgl.Marker({color: "blue"})
    .setLngLat([-84.2564265251854, 33.845285779445625])
    .addTo(map)
    .setPopup(new mapboxgl.Popup().setHTML("<p>Dunkin Donuts</p>"))

var cb = new mapboxgl.Marker({color: "brown"})
    .setLngLat([-84.20883846049261, 33.91059417185177])
    .addTo(map)
    .setPopup(new mapboxgl.Popup().setHTML("<p>Cracker Barrell</p>"))


// var redMarker = new mapboxgl.Marker({color: "red", draggable: "true"})
//     .setLngLat([-84.2253120786325, 34.4531397630891])
//     .addTo(map);

