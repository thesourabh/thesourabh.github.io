function getQueryStringParam(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

// default latitude
var LATITUDE = 42.3745615030193;
// default longitude
var LONGITUDE = -71.11803936751632;

var dimens = {};

var url = 'https://api.instagram.com/v1/media/search?client_id=9cd13ec800244f7b9736f40d62d9d223&count=50';

var height;

$(document).ready(function() {
	LATITUDE = getQueryStringParam("lat");
	LONGITUDE = getQueryStringParam("lng");
	url += '&lat=' + LATITUDE + '&lng=' + LONGITUDE;
    // Execute on load
	getImages();	
	// Bind event listener
	$(window).resize(setImageWidth);
});


function setImageWidth() {
    var $window = $("#viewer");
	var windowsize = $window.innerWidth();
	var numimages = Math.floor(windowsize/250);
	var newsize = Math.floor(windowsize/numimages);
	dimens = {"width": newsize, "height": newsize};
	$(".image-box").css(dimens);
}


function getImages(){
	$.ajax({
	   	type: "GET",
		dataType: "jsonp",
		url: url ,
		success: parseInstaJSON,
		failure: noImages
	});
}

function noImages(){
	alert("No images found");
}
function parseInstaJSON(json){
	$.each(json.data, function(index, photo) {
		var box = '<div class="image-box"><img src="' + photo.images.low_resolution.url + '">';
		box += '<a href="' + photo.link + '" target="_blank">';
		box += '<div class="overlay"><img src="img/instagram-icon.png"></div>'
		box += '</a></div>';
		$("#viewer").append(box);
		console.log(json.data.length);
	});
	setImageWidth();
}