import React from "react";
import Link from "next/link";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MarkerData } from "@/data/map/map";

const greenIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface MarkerItem {
  id: number;
  name: string;
  addressLine1: string;
  addressLine2: string;
  link: string;
  position: [number, number];
}

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
  zIndex = 0,
}) => {
  return (
    <main className="map-page">
      <section className="map-section">
        <div className="section-title">
          <h1>Mapa miejsc bezglutenowych</h1>
          <h4>
            Przeglądaj mapę, <strong>klikaj w znaczniki</strong> i przemierzaj
            świat bezglutenowych miejscówek i restauracji.
          </h4>
          <h4>
            Każdy znacznik zawiera informacje oraz link do reelsa pokazującego
            szczegóły dotyczące danego miejsca.
          </h4>
        </div>

        {/* Map */}
        <MapContainer
          center={center}
          zoom={zoom}
          scrollWheelZoom={true}
          style={{ height, width, zIndex }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />

          {MarkerData.map((m) => (
            <Marker key={m.id} position={m.position} icon={greenIcon}>
              <Popup>
                <strong>{m.name}</strong>
                <div>{m.addressLine1}</div>
                <div>{m.addressLine2}</div>
                <div>
                  <Link className="map-link" target="_blank" href={m.link}>
                    Zobacz to miejsce
                  </Link>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        <div className="section-title">
          <h3>Lista miejsc w formie tabelarycznej</h3>
        </div>

        {/* Table */}
        <div className="places-table-container">
          <table className="places-table">
            <thead>
              <tr>
                <th>Nazwa</th>
                <th>Adres</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {MarkerData.map((m) => (
                <tr key={m.id}>
                  <td>{m.name}</td>
                  <td>
                    {m.addressLine1}
                    <br />
                    {m.addressLine2}
                  </td>
                  <td>
                    <a
                      href={m.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="places-link"
                    >
                      Zobacz to miejsce
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="primary-button mt-6">
          <Link href="/" className="primary-button__text">
            Powrót
          </Link>
        </div>
      </section>
    </main>
  );
};

export default MapComponent;
