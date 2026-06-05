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
