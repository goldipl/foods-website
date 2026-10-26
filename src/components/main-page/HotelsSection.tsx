import React from "react";
import Hotels from "./hotels/Hotels";

const HotelsSection = () => {
  return (
    <section
      id="hotels-section"
      className="hotels-section insta-slots home-section"
    >
      <div className="hotels-wrapper home-section__wrapper">
        <Hotels />
      </div>
    </section>
  );
};

export default HotelsSection;
