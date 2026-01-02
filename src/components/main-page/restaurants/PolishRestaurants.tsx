import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CiInstagram } from "react-icons/ci";
import { polishRestaurantsData } from "@/data/restaurants/polish-restaurants";
import { HiChevronRight } from "react-icons/hi2";

const PolishRestaurants = () => {
  return (
    <>
      <div className="section-title">
        <h2 id="restauracje-polska">Restauracje - Polska</h2>
      </div>
      <div className="listing-v1">
        {polishRestaurantsData
          .slice()
          .reverse()
          .slice(0, 4)
          .map((restaurant) => (
            <Link
              key={restaurant.id}
              href={restaurant.href}
              className="listing-v1-slot"
              target="_blank"
            >
              <div className="listing-v1-slot__img">
                <Image
                  src={restaurant.imgSrc}
                  alt={restaurant.altText}
                  width={400}
                  height={500}
                  loading="lazy"
                />
              </div>
              <div className="listing-v1-slot__text">
                <span>{restaurant.description}</span>
              </div>
              <div className="listing-v1-slot__labels">
                <span className={restaurant.labelClass}>
                  {restaurant.label}
                </span>
              </div>
              <div className="listing-v1-slot__zoom">
                <div className="zoom-box">
                  <CiInstagram />
                  <span>Zobacz</span>
                </div>
              </div>
            </Link>
          ))}
      </div>

      <div className="primary-button">
        <Link href="/restauracje-w-polsce/" className="primary-button__text">
          Więcej z sekcji Restauracje w Polsce <HiChevronRight />
        </Link>
      </div>
    </>
  );
};

export default PolishRestaurants;
