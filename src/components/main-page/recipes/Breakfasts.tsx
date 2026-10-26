import React from "react";
import InstaListingBlock from "../InstaListingBlock";
import { breakfastsRecipesData } from "@/data/recipes/breakfasts-recipes";

const Breakfasts = () => (
  <InstaListingBlock
    id="sniadania"
    eyebrow="Przepisy"
    title="Bezglutenowe śniadania"
    items={breakfastsRecipesData}
    moreHref="/sniadania/"
    moreLabel="Wszystkie śniadania"
  />
);

export default Breakfasts;
