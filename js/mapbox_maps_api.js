"use strict"
mapboxgl.accessToken = mapboxApiKey;  //paste your api key
console.log(mapboxApiKey);

var map = new mapboxgl.Map(
    {
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        zoom: 10,   //1 would be far away, 20 would be close
        center: [-84.250855892393,33.88110533623017]
    });
map.setZoom(8);
