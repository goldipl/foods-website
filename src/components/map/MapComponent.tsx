import React from "react";
import Link from "next/link";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const greenIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface MarkerData {
  id: number;
  name: string;
  addressLine1: string;
  addressLine2: string;
  link: string;
  position: [number, number];
}

const markers: MarkerData[] = [
  {
    id: 1,
    name: "Rola Pao",
    addressLine1: "Al. Jerozolimskie 42,",
    addressLine2: "00-042 Warszawa",
    link: "https://www.instagram.com/reel/C-S0V-rIpJ0/",
    position: [52.230625, 21.014178],
  },
  {
    id: 2,
    name: "Patila Döner Kebap",
    addressLine1: "ul. Świętokrzyska 34,",
    addressLine2: "00-116 Warszawa",
    link: "https://www.instagram.com/p/DOinsrFiKNw/",
    position: [52.233997, 21.001116],
  },
  {
    id: 3,
    name: "Restauracja Wiesz Co Zjesz",
    addressLine1: "plac Konstytucji 1,",
    addressLine2: "00-647 Warszawa",
    link: "https://www.instagram.com/p/DGaKXYkoBiV/",
    position: [52.221044, 21.016888],
  },
  {
    id: 4,
    name: "Groole",
    addressLine1: "Jana i Jędrzeja Śniadeckich 8,",
    addressLine2: "00-656 Warszawa",
    link: "https://www.instagram.com/p/DQKEYzmCNZg/",
    position: [52.221629, 21.015114],
  },
  {
    id: 5,
    name: "Calimero Café - Warszawa Mokotów",
    addressLine1: "Konstruktorska 7/u1,",
    addressLine2: "02-676 Warszawa",
    link: "https://www.instagram.com/p/DKO9OF-IY7O/",
    position: [52.185395, 20.993358],
  },
  {
    id: 6,
    name: "Saska Sushi",
    addressLine1: "Zwycięzców 4,",
    addressLine2: "03-941 Warszawa",
    link: "https://www.instagram.com/p/C-8CItzIVKk/",
    position: [52.23038, 21.0519],
  },
  {
    id: 7,
    name: "Sushi Wesoła",
    addressLine1: "ul. Wspólna 37a,",
    addressLine2: "05-075 Warszawa",
    link: "https://www.instagram.com/p/DBZAnlfoEdF/",
    position: [52.2479307, 21.1918854],
  },
];

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
          style={{ height: height, width, zIndex }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />

          {markers.map((m) => (
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
              {markers.map((m) => (
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
