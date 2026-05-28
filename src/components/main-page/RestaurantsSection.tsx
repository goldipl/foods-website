import React from "react";
import PolishRestaurants from "./restaurants/PolishRestaurants";
import EuropeRestaurants from "./restaurants/EuropeRestaurants";

const RestaurantsSection = () => {
  return (
    <section
      id="restaurants-section"
      className="restaurants-section insta-slots"
    >
      <div className="restaurants-wrapper">
        <PolishRestaurants />
        <EuropeRestaurants />
      </div>
    </section>
  );
};

export default RestaurantsSection;
