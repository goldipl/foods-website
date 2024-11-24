import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CiInstagram } from "react-icons/ci";
import { europeanRestaurantsData } from "@/data/restaurants/european-restaurants";

const EuropeRestaurants = () => {
  return (
    <>
      <h2 id="restauracje-europa">Restauracje - Europa</h2>
      <div className="listing-v1">
        {europeanRestaurantsData.map((recipe) => (
          <Link
            key={recipe.id}
            href={recipe.href}
            className="listing-v1-slot"
            target="_blank"
          >
            <div className="listing-v1-slot__img">
              <Image
                src={recipe.imgSrc}
                alt={recipe.altText}
                width={400}
                height={500}
                loading="lazy"
              />
            </div>
            <div className="listing-v1-slot__text">
              <span>{recipe.description}</span>
            </div>
            <div className="listing-v1-slot__labels">
              <span className={recipe.labelClass}>{recipe.label}</span>
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
    </>
  );
};

export default EuropeRestaurants;
