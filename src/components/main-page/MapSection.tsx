import React from "react";
import Image from "next/image";
import Link from "next/link";
import glutenFreeMap from "./../../../public/img/map/gluten-free-map.jpg";
import { TfiZoomIn } from "react-icons/tfi";

const MapSection = () => {
  return (
    <section id="mapa" className="map-section">
      <div className="map-section-wrapper">
        <div className="section-title">
          <h2>Mapa restauracji/miejsc gluten free</h2>
          <h4>Kliknij w mapę i sprawdź więcej miejsc.</h4>
        </div>
        <div>
          <Link
            className="map-section-wrapper__link"
            href="/bezglutenowe-miejsca"
          >
            <Image
              className="map-section-wrapper__img"
              src={glutenFreeMap}
              alt="Mapa restauracji/miejsc gluten free"
              width={856}
              height={506}
            />
            <TfiZoomIn className="map-section-wrapper__zoom-img" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
