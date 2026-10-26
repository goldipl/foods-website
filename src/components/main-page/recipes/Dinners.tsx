import React from "react";
import InstaListingBlock from "../InstaListingBlock";
import { dinnersRecipesData } from "@/data/recipes/dinners-recipes";

const Dinners = () => (
  <InstaListingBlock
    id="obiady"
    eyebrow="Przepisy"
    title="Bezglutenowe obiady"
    items={dinnersRecipesData}
    moreHref="/obiady/"
    moreLabel="Wszystkie obiady"
  />
);

export default Dinners;
