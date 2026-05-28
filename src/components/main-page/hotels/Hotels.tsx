import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CiInstagram } from "react-icons/ci";
import { hotelsData } from "@/data/hotels/hotels";
import { HiChevronRight } from "react-icons/hi2";

const Hotels = () => {
  return (
    <>
      <div className="section-title">
        <h2 id="hotele-i-pensjonaty">Bezglutenowe hotele i pensjonaty</h2>
      </div>
      <div className="listing-v1">
        {hotelsData
          .slice()
          .reverse()
          .slice(0, 4)
          .map((hotel) => (
            <Link
              key={hotel.id}
              href={hotel.href}
              className="listing-v1-slot"
              target="_blank"
            >
              <div className="listing-v1-slot__img">
                <Image
                  src={hotel.imgSrc}
                  alt={hotel.altText}
                  width={400}
                  height={500}
                  loading="lazy"
                />
              </div>
              <div className="listing-v1-slot__text">
                <span>{hotel.description}</span>
              </div>
              <div className="listing-v1-slot__labels">
                <span className={hotel.labelClass}>{hotel.label}</span>
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
        <Link href="/hotele/" className="primary-button__text">
          Więcej z sekcji Hotele i pensjonaty <HiChevronRight />
        </Link>
      </div>
    </>
  );
};

export default Hotels;
