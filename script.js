var map = L.map('mapid').setView([45.513073847248585, -122.6559512530686], 12);

  // load a tile layer
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

 // load GeoJSON from an external file
  $.getJSON("https://raw.githubusercontent.com/emilyamccarthy/project1app2gjsn/main/places.geojson",function(data){
    // add GeoJSON layer to the map once the file is loaded
    L.geoJson(data).addTo(map);
  });
