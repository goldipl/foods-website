import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CiInstagram } from "react-icons/ci";
import { productsData } from "@/data/products/products";
import { HiChevronRight } from "react-icons/hi2";

const Products = () => {
  return (
    <>
      <div className="section-title">
        <h2 id="produkty">Produkty</h2>
      </div>
      <div className="listing-v1">
        {productsData
          .slice()
          .reverse()
          .slice(0, 4)
          .map((product) => (
            <Link
              key={product.id}
              href={product.href}
              className="listing-v1-slot"
              target="_blank"
            >
              <div className="listing-v1-slot__img">
                <Image
                  src={product.imgSrc}
                  alt={product.altText}
                  width={400}
                  height={500}
                  loading="lazy"
                />
              </div>
              <div className="listing-v1-slot__text">
                <span>{product.description}</span>
              </div>
              <div className="listing-v1-slot__labels">
                <span className={product.labelClass}>{product.label}</span>
                <span className={product.labelShopClass}>
                  {product.labelShop}
                </span>
              </div>
              <div className="listing-v1-slot__zoom">
                <div className="zoom-box">
                  <CiInstagram />
                  <span>Zobacz</span>
                </div>
              </div>
            </Link>
          ))}
      </div>

      <div className="primary-button">
        <Link href="/produkty/" className="primary-button__text">
          Więcej z sekcji Produkty <HiChevronRight />
        </Link>
      </div>
    </>
  );
};

export default Products;
