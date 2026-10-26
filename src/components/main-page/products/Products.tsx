import React from "react";
import InstaListingBlock from "../InstaListingBlock";
import { productsData } from "@/data/products/products";

const Products = () => (
  <InstaListingBlock
    id="produkty"
    eyebrow="Zakupy"
    title="Bezglutenowe produkty"
    items={productsData}
    limit={8}
    moreHref="/produkty/"
    moreLabel="Wszystkie produkty"
  />
);

export default Products;
