import "@/sass/main.scss";
import Head from "next/head";
import React from "react";
import Topbar from "@/components/common/Topbar";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import RecipeListWithSearch from "@/components/recipes/RecipeListWithSearch";
import { breakfastsRecipesData } from "@/data/recipes/breakfasts-recipes";
import { dinnersRecipesData } from "@/data/recipes/dinners-recipes";
import { dessertsRecipesData } from "@/data/recipes/desserts-recipes";
import { appetizersRecipesData } from "@/data/recipes/appetizers-recipes";
import Link from "next/link";
import { HiArrowRight, HiMagnifyingGlass, HiSparkles } from "react-icons/hi2";

const SearchRecipesPage = () => {
  const combined = [
    ...breakfastsRecipesData.map((r) => ({ ...r, id: r.id })),
    ...dinnersRecipesData.map((r) => ({ ...r, id: r.id + 1000 })),
    ...dessertsRecipesData.map((r) => ({ ...r, id: r.id + 2000 })),
    ...appetizersRecipesData.map((r) => ({ ...r, id: r.id + 3000 })),
  ];

  return (
    <>
      <Head>
        <title>Wyszukiwarka przepisów | Bezglutenowa Karola</title>
        <meta
          name="description"
          content="Wyszukaj przepisy i filtruj po tagach"
        />
      </Head>
      <header>
        <Topbar />
        <Header />
      </header>
      <main>
        <section
          className="recipes-search-hero"
          aria-labelledby="recipes-search-hero-title"
        >
          <div
            className="recipes-search-hero__orb recipes-search-hero__orb--one"
            aria-hidden="true"
          />
          <div
            className="recipes-search-hero__orb recipes-search-hero__orb--two"
            aria-hidden="true"
          />
          <div className="recipes-search-hero__inner">
            <div className="recipes-search-hero__content">
              <span className="recipes-search-hero__eyebrow">
                Bezglutenowe inspiracje
              </span>
              <h1 id="recipes-search-hero-title">
                Co dziś
                <br />
                <span>ugotujemy?</span>
              </h1>
              <p>
                Odkryj sprawdzone przepisy bez glutenu. Wyszukuj, filtruj po
                składnikach i znajdź pomysł, który osłodzi albo urozmaici Twój
                dzień.
              </p>
              <Link
                className="recipes-search-hero__cta"
                href="#recipes-search-results"
              >
                Znajdź przepis <HiArrowRight aria-hidden="true" />
              </Link>
              <div className="recipes-search-hero__note">
                <HiMagnifyingGlass aria-hidden="true" />
                {combined.length} przepisów do odkrycia
              </div>
            </div>

            <div className="recipes-search-hero__art" aria-hidden="true">
              <span className="recipes-search-hero__floating recipes-search-hero__floating--one">
                🥑
              </span>
              <span className="recipes-search-hero__floating recipes-search-hero__floating--two">
                ✨
              </span>
              <div className="recipes-search-hero__dish">🥗</div>
              <div className="recipes-search-hero__chip recipes-search-hero__chip--top">
                <span>🌿</span> Bez glutenu
              </div>
              <div className="recipes-search-hero__chip recipes-search-hero__chip--bottom">
                <span>💚</span> Pełne smaku
              </div>
            </div>
          </div>
        </section>
        <section id="recipes-search-page">
          <div className="recipes-wrapper">
            <div className="section-title" id="recipes-search-results"></div>
            <div className="section-desc">
              <p className="lead">
                Szukaj, filtruj i sortuj przepisy z wszystkich kategorii.
              </p>
            </div>

            <RecipeListWithSearch data={combined} />
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default SearchRecipesPage;
