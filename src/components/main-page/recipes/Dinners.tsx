import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CiInstagram } from "react-icons/ci";
import { dinnersRecipesData } from "@/data/recipes/dinners-recipes";
import { HiChevronRight } from "react-icons/hi2";

const Dinners = () => {
  return (
    <>
      <div className="section-title">
        <h2 id="obiady">Obiady</h2>
      </div>
      <div className="listing-v1">
        {dinnersRecipesData
          .slice()
          .reverse()
          .slice(0, 4)
          .map((recipe) => (
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

      <div className="primary-button">
        <Link href="/obiady/" className="primary-button__text">
          Więcej z sekcji Obiady <HiChevronRight />
        </Link>
      </div>
    </>
  );
};

export default Dinners;
