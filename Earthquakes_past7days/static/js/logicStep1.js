console.log("working")


 // We create the tile layer that will be the background of our map.
 let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});
 // for dark map , use this layer 
let satellitestreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {

  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  "Streets": streets,
  "Satellite": satellitestreets
  
};

/// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [39.5,-98.5],
  zoom: 3,
  layers: [streets]
})
// Add GeoJSON data.
// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the toronto GeoJSON URL
let torontoHoods ="https://raw.githubusercontent.com/maryamt95/Mapping_Earthquakes/main/torontoNeighborhoods.json"


// Create a style for the lines.
let myStyle = {
  color: "blue",
  weight: 1,
  fillColor:"yellow"
}

  
// Grabbing our GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data 
  
  /*,{
  style:myStyle,
    onEachFeature: function(feature, layer) {
           
                
    layer.bindPopup("<h2>Neighborhood: " + feature.properties.AREA_NAME  + "</h2> ");
   }
}*/

).addTo(map);
});

         

