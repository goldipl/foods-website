import React from "react";
import Link from "next/link";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "@/sass/main.scss";

const greenIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface MapComponentProps {
  center?: [number, number];
  zoom?: number;
  height?: string | number;
  width?: string | number;
  zIndex?: number;
}

const MapComponent: React.FC<MapComponentProps> = ({
  center = [52.2297, 21.0122],
  zoom = 13,
  height = "800px",
  width = "100%",
  zIndex = "0",
}) => {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom={true}
      style={{ height: height, width, zIndex }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      <Marker position={[52.230471, 21.013947]} icon={greenIcon}>
        <Popup>
          <div>Rola Pao Restaurant</div>
          <div>Al. Jerozolimskie 42,</div>
          <div>00-042 Warszawa</div>
          <div>
            <Link
              target="_blank"
              href="https://www.instagram.com/reel/C-S0V-rIpJ0/"
            >
              Zobacz to miejsce
            </Link>
          </div>
        </Popup>
      </Marker>
      <Marker position={[52.233997, 21.001116]} icon={greenIcon}>
        <Popup>
          <div>Patila Döner Kebap</div>
          <div>ul. Świętokrzyska 34,</div>
          <div>00-116 Warszawa</div>
          <div>
            <Link
              target="_blank"
              href="https://www.instagram.com/p/DOinsrFiKNw/"
            >
              Zobacz to miejsce
            </Link>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
