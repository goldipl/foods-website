import React from "react";
import InstaListingBlock from "../InstaListingBlock";
import { dessertsRecipesData } from "@/data/recipes/desserts-recipes";

const Desserts = () => (
  <InstaListingBlock
    id="desery"
    eyebrow="Przepisy"
    title="Bezglutenowe desery / słodkości"
    items={dessertsRecipesData}
    moreHref="/desery/"
    moreLabel="Wszystkie desery"
  />
);

export default Desserts;
