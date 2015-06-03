/**
 * service.js
 *
 * Computer Science 50
 * Final Project
 *
 * Implements a map based picture finder.
 */

// default latitude
var LATITUDE = 42.3745615030193;

// default longitude
var LONGITUDE = -71.11803936751632;

// global reference to 2D map
var map = null;

// global reference to the single marker
var marker = null;

// global reference to the single infowindow
var infowindow = null;


// load version 3 of the Google Maps API
google.load("maps", "3", {other_params: "sensor=false"});

// once the window has loaded

$(window).load(function() {
    load();
});

function load()
{
    // embed 2D map in DOM
    var latlng = new google.maps.LatLng(LATITUDE, LONGITUDE);
    map = new google.maps.Map($("#map").get(0), {
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        zoom: 7,
        zoomControl: true
    });
	
	google.maps.event.addListener(map, 'click', function(event) {
    placeMarker(event.latLng);
  });
}

function placeMarker(location) {
	if (infowindow != null){
		infowindow.close();
		marker.setMap(null);
	}
	marker = new google.maps.Marker({
		position: location,
		map: map,
	});
	var link = '<br><a href="viewer.html?lat='+location.lat()+'&lng='+location.lng()+'">See pictures from here</a>';
    infowindow = new google.maps.InfoWindow({
		content: 'Latitude: ' + location.lat() + '<br>Longitude: ' + location.lng() + link
	});
	infowindow.open(map,marker);
}