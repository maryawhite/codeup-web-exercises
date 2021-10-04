"use strict"
mapboxgl.accessToken = mapboxApiKey;  //paste your api key
console.log(mapboxApiKey);

var map = new mapboxgl.Map(
    {
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        zoom: 15,   //1 would be far away, 20 would be close
        center: [-98.4861, 29.4252]
    });