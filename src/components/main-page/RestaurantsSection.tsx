import React from "react";
import PolishRestaurants from "./restaurants/PolishRestaurants";
import EuropeRestaurants from "./restaurants/EuropeRestaurants";
import Hotels from "./hotels/Hotels";

const RestaurantsSection = () => {
  return (
    <section
      id="restaurants-section"
      className="restaurants-section insta-slots"
    >
      <div className="restaurants-wrapper">
        <PolishRestaurants />
        <EuropeRestaurants />
        <Hotels />
      </div>
    </section>
  );
};

export default RestaurantsSection;
