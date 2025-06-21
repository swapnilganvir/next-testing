'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const LocationMap = () => {
  const position = [30.208566657106804, 74.94832846760302];
  // Mumbai (example)

  // Optional: Fix default marker icon
  const icon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconSize: [35, 41],
    iconAnchor: [12, 41],
  });

  return (
    <div className="h-73 w-90 max-sm:h-60 max-sm:w-80">
      <MapContainer center={position} zoom={16} className="h-full w-full">
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position} icon={icon}>
          <Popup className="font-semibold">
            Uncram, End of Street 7, Ajit Rd, Bathinda, Punjab
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LocationMap;
