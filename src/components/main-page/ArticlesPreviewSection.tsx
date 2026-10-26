import Link from "next/link";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi2";
import { articlesData } from "@/data/articles/articles";
import SectionHeader from "@/components/common/SectionHeader";

const ArticlesPreviewSection = () => {
  return (
    <section id="articles-preview" className="articles-preview home-section">
      <div className="articles-preview-wrapper home-section__wrapper">
        <SectionHeader
          eyebrow="Poradnik"
          title="Najświeższe artykuły"
          description="Praktyczne teksty o życiu bez glutenu: od pierwszych zakupów po gotowanie i podróże."
          action={{ href: "/artykuly", label: "Wszystkie artykuły" }}
        />

        <div className="articles-grid articles-preview__grid">
          {articlesData
            .slice()
            .reverse()
            .slice(0, 3)
            .map((article) => (
              <Link
                key={article.slug}
                href={`/artykuly/${article.slug}`}
                className="article-card article-card--preview"
              >
                <div className="article-card__img">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={420}
                    height={280}
                    loading="lazy"
                  />
                  <span className="article-card__category">
                    {article.category}
                  </span>
                </div>
                <div className="article-card__content">
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                </div>
                <div className="article-card__footer">
                  <span>Czytaj więcej</span>
                  <span className="article-card__arrow" aria-hidden="true">
                    <HiArrowRight />
                  </span>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesPreviewSection;
