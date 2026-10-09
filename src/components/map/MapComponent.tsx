import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MarkerData } from "@/data/map/map";
import Searchbar from "@/components/common/Searchbar";
import Pagination from "@/components/common/Pagination";
import { HiArrowRight, HiMapPin, HiSparkles } from "react-icons/hi2";

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

const getPlaceCountLabel = (count: number) => {
  if (count === 1) return "miejsce";
  if (
    count % 10 >= 2 &&
    count % 10 <= 4 &&
    (count % 100 < 12 || count % 100 > 14)
  ) {
    return "miejsca";
  }
  return "miejsc";
};

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

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Reset to page 1 when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const filteredData = MarkerData.filter((m) => {
    const query = search.toLowerCase();
    return (
      m.name.toLowerCase().includes(query) ||
      m.addressLine1.toLowerCase().includes(query) ||
      m.addressLine2.toLowerCase().includes(query) ||
      m.country.toLowerCase().includes(query) ||
      m.city.toLowerCase().includes(query)
    );
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedItems = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handleZoomTo = (
    position: [number, number],
    zoomLevel = 17,
    id?: number,
  ) => {
    if (mapRef.current) {
      mapRef.current.setView(position, zoomLevel, { animate: true });
      document
        .getElementById("mapa-interaktywna")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });

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
        <div className="map-page__hero">
          <div
            className="map-page__hero-orb map-page__hero-orb--one"
            aria-hidden="true"
          />
          <div
            className="map-page__hero-orb map-page__hero-orb--two"
            aria-hidden="true"
          />
          <div className="map-page__hero-inner">
            <div className="map-page__hero-content">
              <span className="map-page__hero-eyebrow">
                Bezpiecznie i bez glutenu
              </span>
              <h1 id="map-page-title">
                Mapa miejsc
                <span>bezglutenowych</span>
              </h1>
              <p>
                Znajdź restauracje i lokale, w których bezglutenowe odkrycia
                czekają tuż za rogiem — albo na drugim końcu świata.
              </p>
              <div className="map-page__hero-actions">
                <Link className="map-page__hero-cta" href="#mapa-interaktywna">
                  Odkrywaj na mapie <HiArrowRight aria-hidden="true" />
                </Link>
                <Link
                  className="map-page__hero-cta map-page__hero-cta--secondary"
                  href="#tabela-miejsc-bezglutenowych"
                >
                  Przejdź do tabeli <HiArrowRight aria-hidden="true" />
                </Link>
              </div>
              <div className="map-page__hero-note">
                <HiMapPin aria-hidden="true" />
                {MarkerData.length} sprawdzonych miejsc
              </div>
            </div>

            <div className="map-page__hero-art" aria-hidden="true">
              <div className="map-page__hero-grid">
                <span className="map-page__hero-road map-page__hero-road--one" />
                <span className="map-page__hero-road map-page__hero-road--two" />
                <span className="map-page__hero-road map-page__hero-road--three" />
                <span className="map-page__hero-park" />
                <span className="map-page__hero-pin map-page__hero-pin--one">
                  <HiMapPin />
                </span>
                <span className="map-page__hero-pin map-page__hero-pin--two">
                  <HiMapPin />
                </span>
                <span className="map-page__hero-pin map-page__hero-pin--three">
                  <HiMapPin />
                </span>
              </div>
              <div className="map-page__hero-chip map-page__hero-chip--top">
                <span>📍</span> Miejsca warte odkrycia
              </div>
              <div className="map-page__hero-chip map-page__hero-chip--bottom">
                <span>🌍</span> Polska i świat
              </div>
            </div>
          </div>
        </div>
        <section className="map-explorer" aria-labelledby="map-explorer-title">
          <div className="map-section-heading">
            <span className="map-section-eyebrow">Mapa interaktywna</span>
            <h2 id="map-explorer-title">Odkrywaj bezglutenowe miejsca</h2>
            <p>
              Sprawdź lokalizacje na mapie i wybierz miejsce, które chcesz
              odwiedzić.
            </p>
            <p>
              Każde z nich sprawdziłam osobiście, a na moim Instagramie
              znajdziesz relację zdjęciową lub wideo.
            </p>
          </div>
          <div className="map-canvas-card">
            <div className="map-canvas-toolbar">
              <div className="map-canvas-toolbar__label">
                <HiMapPin aria-hidden="true" />
                <span>Mapa miejsc</span>
              </div>
              <span className="map-canvas-toolbar__count">
                {filteredData.length} {getPlaceCountLabel(filteredData.length)}
              </span>
            </div>
            <MapContainer
              id="mapa-interaktywna"
              className="map-canvas"
              center={center}
              zoom={zoom}
              scrollWheelZoom={true}
              style={{ height, width, zIndex }}
              ref={mapRef}
            >
              <TileLayer
                attribution="&copy; OpenStreetMap contributors"
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
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
                    <div>{m.country}</div>
                    <div>
                      <Link className="map-link" target="_blank" href={m.link}>
                        Zobacz to miejsce
                      </Link>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </section>

        <section
          className="places-directory"
          id="tabela-miejsc-bezglutenowych"
          aria-labelledby="places-directory-title"
        >
          <div className="places-directory__header">
            <div>
              <span className="map-section-eyebrow">Znajdź coś dla siebie</span>
              <h2 id="places-directory-title">Lista bezglutenowych miejsc</h2>
              <p>
                Przeglądaj sprawdzone lokale i szybko wyszukuj po nazwie,
                adresie, mieście lub kraju.
              </p>
            </div>
            <div className="places-directory__total" aria-live="polite">
              <strong>{filteredData.length}</strong>
              <span>{getPlaceCountLabel(filteredData.length)}</span>
            </div>
          </div>

          <div className="places-directory__tools">
            <Searchbar
              value={search}
              onChange={setSearch}
              placeholder="Szukaj po nazwie, kraju lub adresie..."
            />
            <p className="places-directory__result-count" aria-live="polite">
              {filteredData.length === 0
                ? "Nie znaleziono miejsc"
                : `Liczba wyników: ${filteredData.length}`}
            </p>
          </div>

          <div className="places-table-container">
            <table className="places-table">
              <thead>
                <tr>
                  <th scope="col">Nazwa</th>
                  <th scope="col">Adres</th>
                  <th scope="col">Kraj</th>
                  <th scope="col">Miasto</th>
                  <th scope="col">Link</th>
                  <th scope="col">Mapa</th>
                </tr>
              </thead>
              <tbody>
                {paginatedItems.map((m) => (
                  <tr key={m.id}>
                    <td className="places-table__name">{m.name}</td>
                    <td>
                      <span className="table-address-line">
                        {m.addressLine1}
                      </span>
                      <span className="table-address-line">
                        {m.addressLine2}
                      </span>
                    </td>
                    <td>{m.country}</td>
                    <td>{m.city}</td>
                    <td>
                      <a
                        href={m.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="places-link"
                      >
                        Zobacz miejsce
                      </a>
                    </td>
                    <td>
                      <button
                        onClick={() => handleZoomTo(m.position, 17, m.id)}
                        className="zoom-button"
                        type="button"
                      >
                        <HiMapPin aria-hidden="true" />
                        Pokaż na mapie
                      </button>
                    </td>
                  </tr>
                ))}

                {filteredData.length === 0 && (
                  <tr>
                    <td colSpan={6} className="places-table__empty">
                      Brak wyników. Spróbuj zmienić wyszukiwaną frazę.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </section>

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
