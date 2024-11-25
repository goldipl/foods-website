import React from "react";
import nosugar from "./../../../public/icons/boxes-info/sugar-512.svg";
import nomilk from "./../../../public/icons/boxes-info/milk-128.svg";
import nogluten from "./../../../public/icons/boxes-info/gluten-128.svg";
import Image from "next/image";

const BoxesInfoSection = () => {
  return (
    <section id="boxes-info-section" className="boxes-info-section">
      <div className="boxes-info-wrapper">
        <div className="section-title">
          <h2>Znajdziesz u mnie, potrawy i przepisy:</h2>
        </div>
        <div className="boxes-info">
          {/* Slot */}
          <div className="boxes-info-slot">
            <div className="boxes-info-slot__icon">
              <Image src={nogluten} width={40} height={40} alt="bez glutenu" />
            </div>
            <div className="boxes-info-slot__text">
              <span>bez glutenu</span>
            </div>
          </div>
          {/* Slot */}
          <div className="boxes-info-slot">
            <div className="boxes-info-slot__icon">
              <Image src={nomilk} width={40} height={40} alt="bez nabiału" />
            </div>
            <div className="boxes-info-slot__text">
              <span>bez nabiału</span>
            </div>
          </div>
          {/* Slot */}
          <div className="boxes-info-slot">
            <div className="boxes-info-slot__icon">
              <Image src={nosugar} width={40} height={40} alt="bez cukru" />
            </div>
            <div className="boxes-info-slot__text">
              <span>bez cukru</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoxesInfoSection;
