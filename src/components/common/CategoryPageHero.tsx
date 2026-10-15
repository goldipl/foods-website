import React from "react";
import Link from "next/link";
import { HiArrowRight, HiSparkles } from "react-icons/hi2";

interface CategoryPageHeroProps {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  emoji: string;
  itemCount: number;
  itemLabel: string;
  targetId: string;
}

const CategoryPageHero: React.FC<CategoryPageHeroProps> = ({
  eyebrow,
  title,
  highlight,
  description,
  emoji,
  itemCount,
  itemLabel,
  targetId,
}) => (
  <section className="category-hero" aria-label={title}>
    <span className="category-hero__orb category-hero__orb--one" aria-hidden="true" />
    <span className="category-hero__orb category-hero__orb--two" aria-hidden="true" />
    <div className="category-hero__inner">
      <div className="category-hero__content">
        <span className="category-hero__eyebrow">
          <HiSparkles aria-hidden="true" />
          {eyebrow}
        </span>
        <h1>
          {title}
          <span>{highlight}</span>
        </h1>
        <p>{description}</p>
        <Link className="category-hero__cta" href={`#${targetId}`}>
          Odkryj inspiracje <HiArrowRight aria-hidden="true" />
        </Link>
        <div className="category-hero__note">
          <HiSparkles aria-hidden="true" />
          {itemCount} {itemLabel} do odkrycia
        </div>
      </div>
      <div className="category-hero__art" aria-hidden="true">
        <span className="category-hero__orbit category-hero__orbit--one" />
        <span className="category-hero__orbit category-hero__orbit--two" />
        <span className="category-hero__emoji">{emoji}</span>
        <span className="category-hero__chip">💚 Bez glutenu</span>
      </div>
    </div>
  </section>
);

export default CategoryPageHero;
