import React from "react";
import InstaListingBlock from "../InstaListingBlock";
import { appetizersRecipesData } from "@/data/recipes/appetizers-recipes";

const Appetizers = () => (
  <InstaListingBlock
    id="przystawki"
    eyebrow="Przepisy"
    title="Bezglutenowe przystawki / przekąski / sałatki"
    items={appetizersRecipesData}
    moreHref="/przekaski/"
    moreLabel="Wszystkie przekąski"
  />
);

export default Appetizers;
