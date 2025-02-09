import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function RomaniaMap() {
  return (
    <MapContainer center={[45.9432, 24.9668]} zoom={7} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[45.9432, 24.9668]}>
        <Popup>Romania</Popup>
      </Marker>
    </MapContainer>
  );
}

export default RomaniaMap;
