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
map.setZoom(10);
map.setStyle("mapbox://styles/mapbox/navigation-day-v1")

//create a marker on the exact location of your favorite restaurant
var mcdMarker = new mapboxgl.Marker({
    color: "red",
    setZoom: 20
    }).setLngLat([-84.25454735410067, 33.88677041009587])
    .setPopup(new mapboxgl.Popup().setHTML("<p>McDonalds</p>"))
    .addTo(map);


