import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CiInstagram } from "react-icons/ci";
import { latestRecipesData } from "@/data/recipes/latest-recipes";

const LatestRecipes = () => {
  return (
    <>
      <h1 className="seo-text">
        <span>Bezglutenowa Karola</span> - bezglutenowe restauracje, przepisy,
        produkty, celiakia - <span>Karolina Wontorska</span>
      </h1>
      <div className="section-title">
        <h2 id="najnowsze-przepisy">Najnowsze</h2>
      </div>
      <div className="listing-v1">
        {latestRecipesData
          .slice()
          .reverse()
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
    </>
  );
};

export default LatestRecipes;
