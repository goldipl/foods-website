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
    <main>
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

          <Marker key={1} position={[52.230625, 21.014178]} icon={greenIcon}>
            <Popup>
              <strong>Rola Pao</strong>
              <div>Al. Jerozolimskie 42,</div>
              <div>00-042 Warszawa</div>
              <div>
                <Link
                  className="map-link"
                  target="_blank"
                  href="https://www.instagram.com/reel/C-S0V-rIpJ0/"
                >
                  Zobacz to miejsce
                </Link>
              </div>
            </Popup>
          </Marker>

          <Marker key={2} position={[52.233997, 21.001116]} icon={greenIcon}>
            <Popup>
              <strong>Patila Döner Kebap</strong>
              <div>ul. Świętokrzyska 34,</div>
              <div>00-116 Warszawa</div>
              <div>
                <Link
                  className="map-link"
                  target="_blank"
                  href="https://www.instagram.com/p/DOinsrFiKNw/"
                >
                  Zobacz to miejsce
                </Link>
              </div>
            </Popup>
          </Marker>

          <Marker key={3} position={[52.221044, 21.016888]} icon={greenIcon}>
            <Popup>
              <strong>Restauracja Wiesz Co Zjesz</strong>
              <div>plac Konstytucji 1,</div>
              <div>00-647 Warszawa</div>
              <div>
                <Link
                  className="map-link"
                  target="_blank"
                  href="https://www.instagram.com/p/DGaKXYkoBiV/"
                >
                  Zobacz to miejsce
                </Link>
              </div>
            </Popup>
          </Marker>

          <Marker key={4} position={[52.221629, 21.015114]} icon={greenIcon}>
            <Popup>
              <strong>Groole</strong>
              <div>Jana i Jędrzeja Śniadeckich 8,</div>
              <div>00-656 Warszawa</div>
              <div>
                <Link
                  className="map-link"
                  target="_blank"
                  href="https://www.instagram.com/p/DQKEYzmCNZg/"
                >
                  Zobacz to miejsce
                </Link>
              </div>
            </Popup>
          </Marker>
        </MapContainer>

        <div className="primary-button">
          <Link href="/" className="primary-button__text">
            Powrót
          </Link>
        </div>
      </section>
    </main>
  );
};

export default MapComponent;
