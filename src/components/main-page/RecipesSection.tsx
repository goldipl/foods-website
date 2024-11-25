import React from "react";
import LatestRecipes from "./recipes/LatestRecipes";
import Breakfasts from "./recipes/Breakfasts";
import Dinners from "./recipes/Dinners";
import Desserts from "./recipes/Desserts";

const RecipesSection = () => {
  return (
    <section id="recipes-section" className="recipes-section insta-slots">
      <div className="recipes-wrapper">
        <LatestRecipes />
        <Breakfasts />
        <Dinners />
        <Desserts />
      </div>
    </section>
  );
};

export default RecipesSection;
