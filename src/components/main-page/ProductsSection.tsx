import React from "react";
import Products from "./products/Products";

const ProductsSection = () => {
  return (
    <section
      id="products-section"
      className="products-section insta-slots home-section"
    >
      <div className="products-wrapper home-section__wrapper">
        <Products />
      </div>
    </section>
  );
};

export default ProductsSection;
