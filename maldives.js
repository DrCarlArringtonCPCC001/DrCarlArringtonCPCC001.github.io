// 3.2028° N, 73.2207° E -> 3.2028, 73.2207
let map = L.map("map", {
  center: [3.2028, 73.2207],
  zoom: 15
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
