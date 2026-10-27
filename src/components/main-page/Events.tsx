import React from "react";
import InstaListingBlock from "./InstaListingBlock";
import { eventsData } from "@/data/events/events";

const Events = () => {
  return (
    <section id="wydarzenia" className="events-section home-section">
      <div className="events-wrapper home-section__wrapper">
        <InstaListingBlock
          eyebrow="Wydarzenia"
          title="Wydarzenia, warsztaty bezglutenowe i przydatne informacje"
          items={eventsData}
          moreHref="/wydarzenia/"
          moreLabel="Wszystkie wydarzenia"
        />
      </div>
    </section>
  );
};

export default Events;
