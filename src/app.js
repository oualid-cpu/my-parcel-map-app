import Leaflet from 'leaflet';          // import everything from Leaflet
import 'leaflet/dist/leaflet.css';      // import Leaflet's CSS

const WBS = [51.2277, 6.7735]; // Düsseldorf center

// Create the map centered on WBS
const map = Leaflet.map('map').setView(WBS, 13);

// Fix for missing default marker icon
const markerIcon = Leaflet.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconAnchor: [10, 20]
});

// Add one marker at WBS
// Leaflet.marker(WBS, { icon: markerIcon }).addTo(map);

// Add the OpenStreetMap tile layer (background map)
Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://openstreetmap.org" target="_blank">OpenStreetMap</a>'
}).addTo(map);


const myLocations = [
  // existing locations...
  {
    name: 'Café Hüftgold',
    location: [51.2261, 6.7795],
    description: 'Cozy café with brunch and cake'
  },
  {
    name: 'Röststätte Düsseldorf',
    location: [51.2250, 6.7844],
    description: 'Specialty coffee roastery café'
  },
  {
    name: 'Seven Swans',
    location: [51.2316, 6.7780],
    description: 'Scenic café in the old town area'
  },
  {
    name: 'Café Knuth',
    location: [51.2258, 6.7834],
    description: 'Local favorite for breakfast & pastries'
  }
];


// Add markers for each location
myLocations.forEach(location => {
  Leaflet.marker(location.location, { icon: markerIcon })
    .bindPopup(`<b>${location.name}</b><br>${location.description}`)
    .addTo(map);
});

// Adjust map to fit all markers
const bounds = Leaflet.latLngBounds(myLocations.map(loc => loc.location));
map.fitBounds(bounds);
