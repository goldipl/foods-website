import React from "react";
import LatestSlots from "./latest/LatestSlots";
import Breakfasts from "./recipes/Breakfasts";
import Dinners from "./recipes/Dinners";
import Desserts from "./recipes/Desserts";

const RecipesSection = () => {
  return (
    <section id="recipes-section" className="recipes-section insta-slots">
      <div className="recipes-wrapper">
        <LatestSlots />
        <Breakfasts />
        <Dinners />
        <Desserts />
      </div>
    </section>
  );
};

export default RecipesSection;
