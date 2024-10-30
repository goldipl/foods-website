import React from "react";
import PolishRestaurants from "./restaurants/PolishRestaurants";
import EuropeRestaurants from "./restaurants/EuropeRestaurants";

const RestaurantsSection = () => {
  return (
    <div id="restaurants-section" className="restaurants-section">
      <div className="restaurants-wrapper">
        <PolishRestaurants />
        <EuropeRestaurants />
      </div>
    </div>
  );
};

export default RestaurantsSection;
