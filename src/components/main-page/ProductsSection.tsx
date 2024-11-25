import React from "react";
import Products from "./products/Products";

const ProductsSection = () => {
  return (
    <section id="products-section" className="products-section insta-slots">
      <div className="products-wrapper">
        <Products />
      </div>
    </section>
  );
};

export default ProductsSection;
