import "@/sass/main.scss";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { useState } from "react";
import Topbar from "@/components/common/Topbar";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { articlesData, ArticleItem } from "@/data/articles/articles";

interface ArticlePageProps {
  article: ArticleItem;
}

type ArticleGalleryProps = {
  title?: string;
  images: string[];
  onThumbnailClick: (index: number) => void;
};

type ArticleInstagramLinkProps = {
  url: string;
  caption: string;
};

const ArticleInstagramLink = ({ url, caption }: ArticleInstagramLinkProps) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="article-instagram-link"
  >
    <div className="article-instagram-link__inner">
      <svg
        viewBox="0 0 24 24"
        className="article-instagram-link__icon"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.756 0 8.335.012 7.052.07 2.696.278.278 2.579.07 7.052.012 8.335 0 8.756 0 12c0 3.244.012 3.665.07 4.948.278 4.466 2.579 6.885 7.052 7.093 1.283.058 1.704.07 4.948.07 3.243 0 3.665-.012 4.948-.07 4.466-.278 6.879-2.579 7.093-7.052.058-1.283.07-1.704.07-4.948 0-3.244-.012-3.665-.07-4.948C23.722 2.697 21.422.278 16.948.07 15.665.012 15.244 0 12 0z"
        />
        <circle cx="12" cy="12" r="3.6" fill="currentColor" />
        <circle cx="18.406" cy="5.594" r="0.6" fill="currentColor" />
      </svg>
      <p>{caption}</p>
      <span className="article-instagram-link__cta">
        Otwórz na Instagramie →
      </span>
    </div>
  </a>
);

const ArticleGallery = ({
  title,
  images,
  onThumbnailClick,
}: ArticleGalleryProps) => (
  <div className="article-gallery">
    {title && <h3>{title}</h3>}
    <div className="article-gallery__preview">
      {images.slice(0, 4).map((src, index) => (
        <button
          key={`${src}-${index}`}
          type="button"
          className="article-gallery__thumb"
          onClick={() => onThumbnailClick(index)}
          aria-label={`Otwórz zdjęcie ${index + 1} z galerii`}
        >
          <Image
            src={src}
            alt={`Zdjęcie galerii ${index + 1}`}
            width={480}
            height={320}
            priority={index === 0}
          />
          {index === 3 && images.length > 4 ? (
            <span className="article-gallery__more">+{images.length - 4}</span>
          ) : null}
        </button>
      ))}
    </div>
  </div>
);

const ArticleDetailPage = ({ article }: ArticlePageProps) => {
  const [galleryState, setGalleryState] = useState<{
    images: string[];
    index: number;
  } | null>(null);

  const openGalleryImage = (images: string[], index: number) => {
    setGalleryState({ images, index });
  };

  const closeGallery = () => setGalleryState(null);

  const showPreviousImage = () => {
    if (!galleryState) return;
    setGalleryState((current) =>
      current
        ? {
            ...current,
            index:
              (current.index + current.images.length - 1) %
              current.images.length,
          }
        : null,
    );
  };

  const showNextImage = () => {
    if (!galleryState) return;
    setGalleryState((current) =>
      current
        ? {
            ...current,
            index: (current.index + 1) % current.images.length,
          }
        : null,
    );
  };

  return (
    <>
      <Head>
        <title>{article.title} | Bezglutenowa Karola</title>
        <meta name="description" content={article.excerpt} />
      </Head>
      <header>
        <Topbar />
        <Header />
      </header>
      <main>
        <section id="article-page" className="article-page">
          <div className="article-hero">
            <Image
              src={article.image}
              alt={article.title}
              width={1400}
              height={700}
              priority
            />
            <div className="article-hero__overlay">
              <span className="overlay__article-category">
                {article.category}
              </span>
              <h1>{article.title}</h1>
              <div className="article-hero__meta">
                <span>
                  Autor: <span className="meta-author">{article.author}</span>
                </span>
                <span>
                  Data: <span className="meta-date">{article.date}</span>
                </span>
              </div>
            </div>
          </div>

          <div className="article-content">
            <div className="article-content__text">
              {article.content.map((block, index) => {
                if (typeof block === "string") {
                  return <p key={index}>{block}</p>;
                }

                if (block.type === "gallery") {
                  return (
                    <ArticleGallery
                      key={index}
                      title={block.title}
                      images={block.images}
                      onThumbnailClick={(imageIndex) =>
                        openGalleryImage(block.images, imageIndex)
                      }
                    />
                  );
                }

                if (block.type === "instagramLink") {
                  return (
                    <ArticleInstagramLink
                      key={index}
                      url={block.url}
                      caption={block.caption}
                    />
                  );
                }
              })}

              <h2>Najważniejsze wskazówki</h2>
              <ul>
                {article.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <blockquote>{article.quote}</blockquote>
            </div>
            {galleryState ? (
              <div
                className="article-gallery-modal"
                role="dialog"
                aria-modal="true"
              >
                <div className="article-gallery-modal__inner">
                  <button
                    type="button"
                    className="article-gallery-modal__close"
                    onClick={closeGallery}
                    aria-label="Zamknij galerię"
                  >
                    ×
                  </button>
                  <div className="article-gallery-modal__image">
                    <Image
                      src={galleryState.images[galleryState.index]}
                      alt={`Zdjęcie ${galleryState.index + 1} z galerii`}
                      width={1200}
                      height={800}
                      priority
                    />
                  </div>
                  <div className="article-gallery-modal__controls">
                    <button type="button" onClick={showPreviousImage}>
                      ‹
                    </button>
                    <span>
                      {galleryState.index + 1} / {galleryState.images.length}
                    </span>
                    <button type="button" onClick={showNextImage}>
                      ›
                    </button>
                  </div>
                </div>
              </div>
            ) : null}

            <div className="article-content__aside">
              <div className="article-aside-card">
                <h2>Inne artykuły</h2>
                <p>
                  Przejdź do innych artykułów z serii i dowiedz się więcej o
                  diecie bezglutenowej oraz podróżach i kuchni bez glutenu.
                </p>
                <Link href="/artykuly" className="primary-button__text">
                  Wszystkie artykuły
                </Link>
                <Link href="/#o-mnie" className="primary-button__text">
                  O mnie
                </Link>
              </div>
            </div>
          </div>
          <div className="article-page__navigation">
            <Link href="/" className="primary-button__text">
              Powrót do strony głównej
            </Link>
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = articlesData.map((article) => ({
    params: { slug: article.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ArticlePageProps> = async (
  context,
) => {
  const slug = context.params?.slug as string;
  const article = articlesData.find((item) => item.slug === slug);

  return {
    props: {
      article: article ?? articlesData[0],
    },
  };
};

export default ArticleDetailPage;
