import React from "react";
import { MdDoNotDisturb } from "react-icons/md";
import { LuMilkOff } from "react-icons/lu";
import { PiGrainsSlash } from "react-icons/pi";

const BoxesInfoSection = () => {
  return (
    <div id="boxes-info-section" className="boxes-info-section">
      <div className="boxes-info-wrapper">
        <h2>Znajdziesz u mnie, potrawy i przepisy:</h2>
        <div className="boxes-info">
          {/* Slot */}
          <div className="boxes-info-slot">
            <div className="boxes-info-slot__icon">
              <PiGrainsSlash />
            </div>
            <div className="boxes-info-slot__text">
              <span>bez glutenu</span>
            </div>
          </div>
          {/* Slot */}
          <div className="boxes-info-slot">
            <div className="boxes-info-slot__icon">
              <LuMilkOff />
            </div>
            <div className="boxes-info-slot__text">
              <span>bez nabiału</span>
            </div>
          </div>
          {/* Slot */}
          <div className="boxes-info-slot">
            <div className="boxes-info-slot__icon">
              <MdDoNotDisturb />
            </div>
            <div className="boxes-info-slot__text">
              <span>bez cukru</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxesInfoSection;
