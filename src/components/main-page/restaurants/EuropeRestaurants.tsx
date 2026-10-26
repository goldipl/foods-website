import React from "react";
import InstaListingBlock from "../InstaListingBlock";
import { europeanRestaurantsData } from "@/data/restaurants/european-restaurants";

const EuropeRestaurants = () => (
  <InstaListingBlock
    id="restauracje-europa"
    eyebrow="Sprawdzone miejsca"
    title="Bezglutenowe restauracje i cukiernie w Europie"
    items={europeanRestaurantsData}
    moreHref="/restauracje-w-europie/"
    moreLabel="Wszystkie w Europie"
  />
);

export default EuropeRestaurants;
