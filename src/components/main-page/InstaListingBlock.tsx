import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";
import SectionHeader from "@/components/common/SectionHeader";

export interface InstaListingItem {
  id: number | string;
  href: string;
  imgSrc: StaticImageData;
  altText: string;
  description: string;
  label: string;
  labelClass: string;
  labelShop?: string;
  labelShopClass?: string;
}

interface InstaListingBlockProps {
  id?: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  items: InstaListingItem[];
  limit?: number;
  moreHref: string;
  moreLabel: string;
}

const InstaListingBlock: React.FC<InstaListingBlockProps> = ({
  id,
  eyebrow,
  title,
  description,
  items,
  limit = 4,
  moreHref,
  moreLabel,
}) => (
  <div className="insta-block">
    <SectionHeader
      id={id}
      eyebrow={
        <>
          <FaInstagram aria-hidden="true" />
          {eyebrow}
        </>
      }
      title={title}
      description={description}
      action={{ href: moreHref, label: moreLabel }}
    />
    <div className="listing-v1">
      {items
        .slice()
        .reverse()
        .slice(0, limit)
        .map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="listing-v1-slot"
            target="_blank"
          >
            <div className="listing-v1-slot__img">
              <Image
                src={item.imgSrc}
                alt={item.altText}
                width={400}
                height={500}
                loading="lazy"
              />
            </div>
            <div className="listing-v1-slot__text">
              <span>{item.description}</span>
            </div>
            <div className="listing-v1-slot__labels">
              <span className={item.labelClass}>{item.label}</span>
              {item.labelShop && (
                <span className={item.labelShopClass}>{item.labelShop}</span>
              )}
            </div>
            <div className="listing-v1-slot__zoom">
              <div className="zoom-box">
                <FaInstagram />
                <span>Zobacz</span>
              </div>
            </div>
          </Link>
        ))}
    </div>
  </div>
);

export default InstaListingBlock;
