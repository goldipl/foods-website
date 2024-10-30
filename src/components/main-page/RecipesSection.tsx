import React from "react";
import LatestRecipes from "./recipes/LatestRecipes";
import Breakfasts from "./recipes/Breakfasts";
import Dinners from "./recipes/Dinners";
import Desserts from "./recipes/Desserts";

const RecipesSection = () => {
  return (
    <div id="recipes-section" className="recipes-section">
      <div className="recipes-wrapper">
        <LatestRecipes />
        <Breakfasts />
        <Dinners />
        <Desserts />
      </div>
    </div>
  );
};

export default RecipesSection;
