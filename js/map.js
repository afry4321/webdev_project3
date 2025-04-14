function init(){
  var el = document.getElementById("map");

  var myMap = new google.maps.Map(el, {
    center: { lat: 41.8356, lng: -87.6259 },
    zoom: 14,
  });
  
window.addEventListener('load', init);