import "@/sass/main.scss";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Topbar from "@/components/common/Topbar";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { articlesData } from "@/data/articles/articles";

const ArticlesPage = () => {
  const articles = articlesData.map((article) => ({
    ...article,
    href: `/artykuly/${article.slug}`,
  }));

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
        <section id="articles-page" className="articles-page">
          <div className="articles-page__intro">
            <div className="section-title">
              <h1>Artykuły i poradniki o diecie bezglutenowej</h1>
            </div>
            <div className="section-desc">
              <p>
                Znajdziesz tu praktyczne teksty, które pomogą Ci bezpiecznie
                przejść na dietę bezglutenową. Od pierwszych zakupów po
                codzienne gotowanie i podróże.
              </p>
              <p>
                Każdy artykuł jest pisany z perspektywy osoby, która sama zmaga
                się z celiakią i chce dzielić się sprawdzonymi wskazówkami.
              </p>
            </div>
          </div>

          <div className="articles-grid">
            {articles.map((article) => (
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

          <div className="articles-page__navigation">
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

export default ArticlesPage;
