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
}).bindPopup(`<iframe width="280" height="120" src="https://www.youtube.com/embed/-K8lqsykYwg?si=_bYinQYfS9hI8bs1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`)
	.addTo(map);
