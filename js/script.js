function initMap(){
  const myMap = new google.maps.Map(document.getElementById("map"), {
	zoom: 8,
    center: {lat: -34.397, lng: 150.644},
  });

window.onload = function() {
  const lastModified = document.lastModified;
  alert("This page was last modified on: " + lastModified);
}