



// Grabbing our GeoJSON data.
/**L.geoJSON(sanFranAirport,{
  pointToLayer:function(feature,latlng){
    console.log (feature)
    return L.marker(latlng)
    .bindPopup("<h2>" + feature.properties.name  + "</h2> <hr> <h3>" + feature.properties.city + ", " + feature.properties.country+ "</h3>")
  }
}).addTo(map);**/


/**L.geoJson(sanFranAirport, {
  onEachFeature: function(feature, layer) {
        console.log (layer)
    layer.bindPopup("<h2>Airport code: " + feature.properties.faa  + "</h2> <hr> <h3> Airport Name: " + feature.properties.name +  "</h3>");
   }
}).addTo(map);**/

 // We create the tile layer that will be the background of our map.
 let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});
 // for dark map , use this layer 
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {

  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  Dark: dark,
  Light: light
  
};

/// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [44.0, -80.0],
  zoom: 2,
  layers: [dark]
})
// Add GeoJSON data.
// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the toronto GeoJSON URL
let torontoData ="https://raw.githubusercontent.com/maryamt95/Mapping_Earthquakes/main/torontoRoutes.json"


// Create a style for the lines.
let myStyle = {
  color: "#ffffa1",
  weight: 2
}

  
// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data ,{
  style:myStyle,
    onEachFeature: function(feature, layer) {
           
                
    layer.bindPopup("<h2>Airport code: " + feature.properties.airline  + "</h2> <hr> <h3> Destination: " + feature.properties.dst +  "</h3>");
   }
}

).addTo(map);
});

         

