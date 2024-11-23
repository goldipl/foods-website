import React from "react";
import Products from "./products/Products";

const ProductsSection = () => {
  return (
    <div id="products-section" className="products-section">
      <div className="products-wrapper">
        <Products />
      </div>
    </div>
  );
};

export default ProductsSection;
