import React from "react";
import InstaListingBlock from "../InstaListingBlock";
import { hotelsData } from "@/data/hotels/hotels";

const Hotels = () => (
  <InstaListingBlock
    id="hotele-i-pensjonaty"
    eyebrow="Noclegi"
    title="Bezglutenowe hotele i pensjonaty"
    items={hotelsData}
    moreHref="/hotele/"
    moreLabel="Wszystkie hotele"
  />
);

export default Hotels;
