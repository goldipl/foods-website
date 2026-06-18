import "@/sass/main.scss";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CiInstagram } from "react-icons/ci";
import { breakfastsRecipesData } from "@/data/recipes/breakfasts-recipes";
import Topbar from "@/components/common/Topbar";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import RecipeListWithSearch from "@/components/recipes/RecipeListWithSearch";

const BreakfastsPage = () => {
  return (
    <>
      <Head>
        <title>
          Przepisy na śniadania bezglutenowe - Pyszne pomysły | Bezglutenowa
          Karola
        </title>
        <meta
          name="description"
          content="Kolekcja pysznych przepisów na śniadania bez glutenu. Proste, szybkie i pełne energii pomysły na idealny początek dnia bez glutenu."
        />
      </Head>
      <header>
        <Topbar />
        <Header />
      </header>
      <main>
        <section id="category-page">
          <div className="section-description">
            <div className="section-title">
              <h1>Śniadania bezglutenowe – zdrowy i pyszny początek dnia</h1>
            </div>
            <div className="section-desc">
              <p>
                Szukasz pomysłów na śniadania bezglutenowe, które są nie tylko
                zdrowe, ale i pyszne? Dobrze trafiłeś! Bez względu na to, czy
                unikasz glutenu z powodu celiakii, nietolerancji czy po prostu
                chcesz jeść lżej, istnieje mnóstwo sposobów, by rozpocząć dzień
                pełen energii i smaku – bez pszenicy, żyta i jęczmienia.
              </p>
              <h2>Dlaczego warto wybierać śniadania bezglutenowe?</h2>
              <p>
                Bezglutenowe śniadanie to nie tylko moda – to sposób na lepsze
                samopoczucie i zdrowsze trawienie. Dieta bezglutenowa może:
              </p>
              <ul>
                <li>poprawić koncentrację i poziom energii,</li>
                <li>zmniejszyć uczucie ciężkości po posiłku,</li>
                <li>wspierać układ odpornościowy,</li>
                <li>pomóc w utrzymaniu prawidłowej masy ciała.</li>
              </ul>
            </div>
          </div>

          <RecipeListWithSearch data={breakfastsRecipesData} />
          <div className="primary-button">
            <Link href="/" className="primary-button__text">
              Powrót
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

export default BreakfastsPage;
