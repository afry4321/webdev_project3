function init(){
  var myMap = new google.maps.Map(document.getElementById('canvas'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8,
  });
  
window.addEventListener('load', init);