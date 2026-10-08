import "@/sass/main.scss";
import { useMemo, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { HiArrowRight, HiBookOpen, HiSparkles } from "react-icons/hi2";
import Topbar from "@/components/common/Topbar";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Pagination from "@/components/common/Pagination";
import { articlesData } from "@/data/articles/articles";
import articlesHeroImage from "../../public/img/hero/articles.jpg";

const ArticlesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articles = useMemo(
    () =>
      articlesData
        .slice()
        .reverse()
        .map((article) => ({
          ...article,
          href: `/artykuly/${article.slug}`,
        })),
    [],
  );

  const articlesPerPage = 6;
  const totalPages = Math.max(1, Math.ceil(articles.length / articlesPerPage));
  const paginatedArticles = articles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage,
  );

  return (
    <>
      <Head>
        <title>
          Artykuły i poradniki o diecie bezglutenowej - Inspiracje i porady |
          Bezglutenowa Karola
        </title>
        <meta
          name="description"
          content="Przeczytaj artykuły o życiu bez glutenu, poradach dietetycznych oraz inspiracjach kulinarnych."
        />
      </Head>
      <header>
        <Topbar />
        <Header />
      </header>
      <main>
        <div className="articles-page">
          <section
            className="articles-page__hero"
            aria-labelledby="articles-page-title"
          >
            <div
              className="articles-page__orb articles-page__orb--one"
              aria-hidden="true"
            />
            <div
              className="articles-page__orb articles-page__orb--two"
              aria-hidden="true"
            />
            <div className="articles-page__hero-inner">
              <div className="articles-page__hero-content">
                <span className="articles-page__eyebrow">
                  <HiSparkles aria-hidden="true" /> Wiedza i inspiracje
                </span>
                <h1 id="articles-page-title">
                  Artykuły i poradniki
                  <span>o diecie bezglutenowej</span>
                </h1>
                <p>
                  Praktyczne wskazówki, które pomogą Ci bezpiecznie żyć bez
                  glutenu — od pierwszych zakupów po codzienne gotowanie i
                  podróże.
                </p>
                <p>
                  Piszę z perspektywy osoby, która sama zmaga się z celiakią i
                  dzieli się sprawdzonymi rozwiązaniami.
                </p>
                <Link
                  className="articles-page__hero-cta"
                  href="#lista-artykulow"
                >
                  Odkryj artykuły <HiArrowRight aria-hidden="true" />
                </Link>
                <div className="articles-page__hero-note">
                  <HiBookOpen aria-hidden="true" />
                  {articles.length} artykułów i poradników
                </div>
              </div>

              <div className="articles-page__hero-art" aria-hidden="true">
                <div className="articles-page__hero-image">
                  <Image
                    src={articlesHeroImage}
                    alt=""
                    fill
                    priority
                    sizes="(max-width: 760px) 80vw, 36vw"
                  />
                </div>
                <div className="articles-page__art-chip articles-page__art-chip--top">
                  <HiBookOpen /> Porady na co dzień
                </div>
                <div className="articles-page__art-chip articles-page__art-chip--bottom">
                  <HiSparkles /> Sprawdzone z doświadczenia
                </div>
              </div>
            </div>
          </section>

          <section
            id="lista-artykulow"
            className="articles-page__listing"
            aria-labelledby="articles-list-title"
          >
            <div className="articles-page__listing-heading">
              <div>
                <span className="articles-page__section-kicker">
                  Czytaj i odkrywaj
                </span>
                <h2 id="articles-list-title">Wiedza, która pomaga</h2>
              </div>
              <p>Wybierz temat i znajdź wskazówki przydatne na co dzień.</p>
            </div>

            <div className="articles-grid">
              {paginatedArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={article.href}
                  className="article-card"
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

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />

            <div className="articles-page__navigation">
              <Link href="/" className="primary-button__text">
                Powrót do strony głównej
              </Link>
            </div>
          </section>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default ArticlesPage;
