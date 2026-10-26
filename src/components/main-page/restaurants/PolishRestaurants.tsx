import React from "react";
import InstaListingBlock from "../InstaListingBlock";
import { polishRestaurantsData } from "@/data/restaurants/polish-restaurants";

const PolishRestaurants = () => (
  <InstaListingBlock
    id="restauracje-polska"
    eyebrow="Sprawdzone miejsca"
    title="Bezglutenowe restauracje i cukiernie w Polsce"
    items={polishRestaurantsData}
    moreHref="/restauracje-w-polsce/"
    moreLabel="Wszystkie w Polsce"
  />
);

export default PolishRestaurants;
