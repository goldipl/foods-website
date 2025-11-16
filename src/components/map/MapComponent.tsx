import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MarkerData } from "@/data/map/map";
import SearchBar from "@/components/map/SearchBar";

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
  center = [48.2297, 21.0122],
  zoom = 4,
  height = "800px",
  width = "100%",
  zIndex = 0,
}) => {
  const mapRef = useRef<L.Map | null>(null);

  const markersRef = useRef<Record<number, L.Marker>>({});

  const [search, setSearch] = useState("");

  const filteredData = MarkerData.filter((m) => {
    const query = search.toLowerCase();
    return (
      m.name.toLowerCase().includes(query) ||
      m.addressLine1.toLowerCase().includes(query) ||
      m.addressLine2.toLowerCase().includes(query)
    );
  });

  const handleZoomTo = (
    position: [number, number],
    zoomLevel = 17,
    id?: number
  ) => {
    if (mapRef.current) {
      mapRef.current.setView(position, zoomLevel, { animate: true });
      window.scrollTo(0, 0);

      if (id && markersRef.current[id]) {
        setTimeout(() => {
          markersRef.current[id].openPopup();
        }, 600);
      }
    }
  };

  useEffect(() => {
    if (!mapRef.current) return;
  }, []);

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
            Miejsca sprawdzone przeze mnie osobiście. Do każdej lokalizacji
            dołączam relację w formie wideo — zapraszam do oglądania!
          </h4>
        </div>

        {/* Map */}
        <MapContainer
          center={center}
          zoom={zoom}
          scrollWheelZoom={true}
          style={{ height, width, zIndex }}
          ref={mapRef}
        >
          <TileLayer
            attribution="&copy; OpenStreetMap &copy; CARTO"
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />

          {filteredData.map((m) => (
            <Marker
              key={m.id}
              position={m.position}
              icon={greenIcon}
              ref={(marker) => {
                if (marker) markersRef.current[m.id] = marker;
              }}
            >
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

        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Szukaj po nazwie lub adresie..."
        />

        {/* Table */}
        <div className="places-table-container">
          <table className="places-table">
            <thead>
              <tr>
                <th>Nazwa</th>
                <th>Adres</th>
                <th>Link</th>
                <th>Mapa</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((m) => (
                <tr key={m.id}>
                  <td>{m.name}</td>
                  <td>
                    <span className="table-address-line">{m.addressLine1}</span>
                    <span className="table-address-line">{m.addressLine2}</span>
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
                  <td>
                    <button
                      onClick={() => handleZoomTo(m.position, 17, m.id)}
                      className="zoom-button"
                      type="button"
                    >
                      🔍 Pokaż na mapie
                    </button>
                  </td>
                </tr>
              ))}

              {filteredData.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    style={{ textAlign: "center", padding: "20px" }}
                  >
                    Brak wyników.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

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
