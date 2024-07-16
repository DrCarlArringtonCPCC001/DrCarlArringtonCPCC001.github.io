// 3.2028° N, 73.2207° E -> 3.2028, 73.2207
let map = L.map("map", {
  center: [3.2028, 73.2207],
  zoom: 15
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// rangali hotel: Coordinates: 3°36′59″N 72°42′59″E -> 3.3659, 72.4259
L.circle([3.3659, 72.4259], {
	fillColor: 'teal',
	color: 'black',
	radius: 1000
}).addTo(map);
