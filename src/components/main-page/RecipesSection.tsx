import Image from "next/image";
import React from "react";
import recipeImg001 from "./../../../public/img/recipes/001_recipe.jpg";
import Link from "next/link";
import { CiInstagram } from "react-icons/ci";

const RecipesSection = () => {
  return (
    <div id="recipes-section" className="recipes-section">
      <div className="recipes-wrapper">
        <h2>Przepisy</h2>
        <div className="listing-v1">
          {/* Recipe slot */}
          <Link
            href="https://www.instagram.com/p/DBdvWQouPv2/"
            className="listing-v1-slot"
          >
            <div className="listing-v1-slot__img">
              <Image
                src={recipeImg001}
                alt="Makaron"
                width={400}
                height={500}
              ></Image>
            </div>
            <div className="listing-v1-slot__text">
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laborum quam laboriosam in tempore veritatis perspiciatis quo
                expedita officiis eaque esse recusandae aperiam maxime impedit,
                deleniti sequi similique animi voluptate nesciunt.
              </span>
            </div>
            <div className="listing-v1-slot__labels">
              <span>Obiad</span>
            </div>
            <div className="listing-v1-slot__zoom">
              <div className="zoom-box">
                <CiInstagram />
                <span>Zobacz</span>
              </div>
            </div>
          </Link>
          {/* Recipe slot */}
          <Link
            href="https://www.instagram.com/p/DBdvWQouPv2/"
            className="listing-v1-slot"
          >
            <div className="listing-v1-slot__img">
              <Image
                src={recipeImg001}
                alt="Makaron"
                width={400}
                height={500}
              ></Image>
            </div>
            <div className="listing-v1-slot__text">
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laborum quam laboriosam in tempore veritatis perspiciatis quo
                expedita officiis eaque esse recusandae aperiam maxime impedit,
                deleniti sequi similique animi voluptate nesciunt.
              </span>
            </div>
            <div className="listing-v1-slot__labels">
              <span>Obiad</span>
            </div>
            <div className="listing-v1-slot__zoom">
              <div className="zoom-box">
                <CiInstagram />
                <span>Zobacz</span>
              </div>
            </div>
          </Link>
          {/* Recipe slot */}
          <Link
            href="https://www.instagram.com/p/DBdvWQouPv2/"
            className="listing-v1-slot"
          >
            <div className="listing-v1-slot__img">
              <Image
                src={recipeImg001}
                alt="Makaron"
                width={400}
                height={500}
              ></Image>
            </div>
            <div className="listing-v1-slot__text">
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laborum quam laboriosam in tempore veritatis perspiciatis quo
                expedita officiis eaque esse recusandae aperiam maxime impedit,
                deleniti sequi similique animi voluptate nesciunt.
              </span>
            </div>
            <div className="listing-v1-slot__labels">
              <span>Obiad</span>
            </div>
            <div className="listing-v1-slot__zoom">
              <div className="zoom-box">
                <CiInstagram />
                <span>Zobacz</span>
              </div>
            </div>
          </Link>
          {/* Recipe slot */}
          <Link
            href="https://www.instagram.com/p/DBdvWQouPv2/"
            className="listing-v1-slot"
          >
            <div className="listing-v1-slot__img">
              <Image
                src={recipeImg001}
                alt="Makaron"
                width={400}
                height={500}
              ></Image>
            </div>
            <div className="listing-v1-slot__text">
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laborum quam laboriosam in tempore veritatis perspiciatis quo
                expedita officiis eaque esse recusandae aperiam maxime impedit,
                deleniti sequi similique animi voluptate nesciunt.
              </span>
            </div>
            <div className="listing-v1-slot__labels">
              <span>Obiad</span>
            </div>
            <div className="listing-v1-slot__zoom">
              <div className="zoom-box">
                <CiInstagram />
                <span>Zobacz</span>
              </div>
            </div>
          </Link>
          {/* Recipe slot */}
          <Link
            href="https://www.instagram.com/p/DBdvWQouPv2/"
            className="listing-v1-slot"
          >
            <div className="listing-v1-slot__img">
              <Image
                src={recipeImg001}
                alt="Makaron"
                width={400}
                height={500}
              ></Image>
            </div>
            <div className="listing-v1-slot__text">
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laborum quam laboriosam in tempore veritatis perspiciatis quo
                expedita officiis eaque esse recusandae aperiam maxime impedit,
                deleniti sequi similique animi voluptate nesciunt.
              </span>
            </div>
            <div className="listing-v1-slot__labels">
              <span>Obiad</span>
            </div>
            <div className="listing-v1-slot__zoom">
              <div className="zoom-box">
                <CiInstagram />
                <span>Zobacz</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipesSection;
