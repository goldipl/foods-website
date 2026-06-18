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
        <section id="recipes-search-page">
          <div className="recipes-wrapper">
            <div className="section-title">
              <h1>Wyszukiwarka przepisów</h1>
            </div>
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
