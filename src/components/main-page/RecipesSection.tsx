import React from "react";
import LatestRecipes from "./recipes/LatestRecipes";

const RecipesSection = () => {
  return (
    <div id="recipes-section" className="recipes-section">
      <div className="recipes-wrapper">
        <LatestRecipes />
      </div>
    </div>
  );
};

export default RecipesSection;
