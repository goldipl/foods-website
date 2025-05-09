import React from "react";
import Breakfasts from "./recipes/Breakfasts";
import Dinners from "./recipes/Dinners";
import Desserts from "./recipes/Desserts";
import Appetizers from "./recipes/Appetizers";

const RecipesSection = () => {
  return (
    <section id="recipes-section" className="recipes-section insta-slots">
      <div className="recipes-wrapper">
        <Breakfasts />
        <Dinners />
        <Desserts />
        <Appetizers />
      </div>
    </section>
  );
};

export default RecipesSection;
