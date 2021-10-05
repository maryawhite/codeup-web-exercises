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
// new mapboxgl.Marker({color: "red"})
//     .setLngLat([-84.25454735410067, 33.88677041009587])
//     .setPopup(new mapboxgl.Popup().setHTML("<p>McDonalds</p>"))
//     .addTo(map)
//
// var dunkinMarker = new mapboxgl.Marker({color: "blue"})
//     //reference the object
//     .setLngLat([-84.2564265251854, 33.845285779445625])
//     .addTo(map)
//     .setPopup(new mapboxgl.Popup().setHTML("<p>Dunkin Donuts</p>"))
//
// var cb = new mapboxgl.Marker({color: "brown"})
//     .setLngLat([-84.20883846049261, 33.91059417185177])
//     .addTo(map)
//     .setPopup(new mapboxgl.Popup().setHTML("<p>Cracker Barrel</p>"))

var infoArray = [{img: "/img/frenchfries.jpeg", name: "McDonalds", type: "American", location: [-84.25454735410067, 33.88677041009587], color: "red"}, {img: "/img/dunkin.jpeg", name: "Dunkin", type: "American", location: [-84.2564265251854, 33.845285779445625], color: "blue"}, {img: "/img/cb.jpg", name: "Cracker Barrel", type: "American", location: [-84.20883846049261, 33.91059417185177], color: "brown"}]

infoArray.forEach(function(info){
    new mapboxgl.Marker({color: info.color})
        .setLngLat(info.location)
        .setPopup(new mapboxgl.Popup().setHTML("<p>" + info.name + "-" + info.type + "</p>" + '<img src="' + info.img +'">'))
        .addTo(map)

});

