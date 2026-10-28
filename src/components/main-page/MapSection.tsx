import React from "react";
import Image from "next/image";
import Link from "next/link";
import glutenFreeMap from "./../../../public/img/map/gluten-free-map.jpg";
import { MarkerData } from "@/data/map/map";
import { HiArrowRight, HiMapPin } from "react-icons/hi2";
import { TfiZoomIn } from "react-icons/tfi";

const pluralize = (count: number, one: string, few: string, many: string) => {
  if (count === 1) return one;
  if (
    count % 10 >= 2 &&
    count % 10 <= 4 &&
    (count % 100 < 12 || count % 100 > 14)
  ) {
    return few;
  }
  return many;
};

const placesCount = MarkerData.length;
const countriesCount = new Set(MarkerData.map((m) => m.country)).size;
const citiesCount = new Set(MarkerData.map((m) => m.city)).size;

const MAP_STATS = [
  {
    value: placesCount,
    label: pluralize(placesCount, "miejsce", "miejsca", "miejsc"),
  },
  {
    value: countriesCount,
    label: pluralize(countriesCount, "kraj", "kraje", "krajów"),
  },
  {
    value: citiesCount,
    label: pluralize(citiesCount, "miasto", "miasta", "miast"),
  },
];

const MapSection = () => {
  return (
    <section id="mapa" className="home-map" aria-labelledby="map-title">
      <div className="home-map__card">
        <div className="home-map__content">
          <span className="home-map__eyebrow">
            <HiMapPin aria-hidden="true" /> Odkrywaj bez glutenu
          </span>
          <h2 id="map-title">
            Mapa miejsc
            <span>gluten free</span>
          </h2>
          <p>
            Restauracje i lokale, które sprawdziłam osobiście — w Polsce i za
            granicą. Znajdź bezpieczne miejsce na kolejne wyjście lub podróż.
          </p>
          <ul className="home-map__stats" aria-label="Mapa w liczbach">
            {MAP_STATS.map((stat) => (
              <li key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>
          <Link className="home-map__cta" href="/bezglutenowe-miejsca">
            Otwórz mapę <HiArrowRight aria-hidden="true" />
          </Link>
        </div>

        <Link
          className="home-map__preview"
          href="/bezglutenowe-miejsca"
          aria-label="Otwórz interaktywną mapę miejsc gluten free"
        >
          <span className="home-map__preview-frame">
            <Image
              className="home-map__img"
              src={glutenFreeMap}
              alt="Mapa restauracji i miejsc gluten free"
              width={856}
              height={506}
            />
            <span className="home-map__zoom" aria-hidden="true">
              <TfiZoomIn />
            </span>
          </span>
          <span
            className="home-map__chip home-map__chip--top"
            aria-hidden="true"
          >
            <span>📍</span> Sprawdzone osobiście
          </span>
          <span
            className="home-map__chip home-map__chip--bottom"
            aria-hidden="true"
          >
            <span>🌍</span> Polska i świat
          </span>
        </Link>
      </div>
    </section>
  );
};

export default MapSection;
