let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";

d3.json(url).then(
  function(data)
  {
    console.log(data);

    let map = L.map("map", {
      center: [37.09, -95.71],
      zoom: 5
    });

    var USGS_USImagery = L.tileLayer('https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}', {
    	maxZoom: 20,
    	attribution: 'Tiles courtesy of the <a href="https://usgs.gov/">U.S. Geological Survey</a>'
    }).addTo(map);

    function onEachFeature(feature, layer)
      {
        layer.bindPopup(`<center>
        <h3>${feature.properties.place}</h3>
        <hr>
        <p>${new Date(feature.properties.time)}</p>
        <p><b>Magnitude</b> ${feature.properties.mag.toFixed(2)}</p>
        </center>`);
      }

    let earthquakes = L.geoJSON(data.features, {
      onEachFeature: onEachFeature
    }).addTo(map);

    
  }
);
