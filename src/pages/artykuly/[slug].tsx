import "@/sass/main.scss";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import Topbar from "@/components/common/Topbar";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { articlesData, ArticleItem } from "@/data/articles/articles";

interface ArticlePageProps {
  article: ArticleItem;
}

const ArticleDetailPage = ({ article }: ArticlePageProps) => {
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
              <span>{article.category}</span>
              <h1>{article.title}</h1>
              <div className="article-hero__meta">
                <span>Autor: {article.author}</span>
                <span>Data: {article.date}</span>
              </div>
            </div>
          </div>

          <div className="article-content">
            <div className="article-content__text">
              {article.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              <h2>Najważniejsze wskazówki</h2>
              <ul>
                {article.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <blockquote>{article.quote}</blockquote>
            </div>

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
