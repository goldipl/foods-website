import React from "react";
import Hotels from "./hotels/Hotels";

const HotelsSection = () => {
  return (
    <section id="hotels-section" className="hotels-section insta-slots">
      <div className="hotels-wrapper">
        <Hotels />
      </div>
    </section>
  );
};

export default HotelsSection;
