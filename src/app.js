import Leaflet from 'leaflet';          // import everything from Leaflet
import 'leaflet/dist/leaflet.css';      // import Leaflet's CSS

const WBS = [52.457131, 13.54007];     // Coordinates for WBS Coding School

// Create the map centered on WBS
const map = Leaflet.map('map').setView(WBS, 13);

// Fix for missing default marker icon
const markerIcon = Leaflet.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconAnchor: [10, 20]
});

// Add one marker at WBS
Leaflet.marker(WBS, { icon: markerIcon }).addTo(map);

// Add the OpenStreetMap tile layer (background map)
Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://openstreetmap.org" target="_blank">OpenStreetMap</a>'
}).addTo(map);


const myLocations = [
  {
    name: 'WBS CODING SCHOOL',
    location: [52.457131, 13.54007],
    description: 'The best coding school in the world'
  },
  {
    name: 'Alexanderplatz',
    location: [52.521918, 13.413215],
    description: 'The most famous square in Berlin'
  },
  {
    name: 'Brandenburg Gate',
    location: [52.516275, 13.377704],
    description: 'The most famous gate in Berlin'
  },
  {
    name: 'Berlin Wall',
    location: [52.507541, 13.39032],
    description: 'The most famous wall in Berlin'
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
