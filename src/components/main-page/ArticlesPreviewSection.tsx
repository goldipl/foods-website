import Link from "next/link";
import Image from "next/image";
import { articlesData } from "@/data/articles/articles";

const ArticlesPreviewSection = () => {
  return (
    <section id="articles-preview" className="articles-preview">
      <div className="articles-preview-wrapper">
        <div className="section-title">
          <h2>Najświeższe artykuły</h2>
        </div>

        <div className="articles-grid articles-preview__grid">
          {articlesData.slice(0, 3).map((article) => (
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
              </div>
              <div className="article-card__content">
                <span className="article-card__category">
                  {article.category}
                </span>
                <h2>{article.title}</h2>
                <p>{article.excerpt}</p>
              </div>
              <div className="article-card__footer">
                <span>Czytaj więcej</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="articles-preview__more">
          <Link href="/artykuly" className="primary-button__text">
            Zobacz wszystkie artykuły
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ArticlesPreviewSection;
