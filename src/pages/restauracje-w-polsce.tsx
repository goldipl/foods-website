import "@/sass/main.scss";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CiInstagram } from "react-icons/ci";
import { polishRestaurantsData } from "@/data/restaurants/polish-restaurants";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const PolishRestaurantsPage = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <section id="category-page">
          <div className="section-description">
            <div className="section-title">
              <h1>
                Restauracje bezglutenowe w Polsce – różnorodność smaków bez
                kompromisów
              </h1>
            </div>
            <div className="section-desc">
              <p>
                Szukasz miejsc, gdzie możesz zjeść pysznie i bez glutenu? Dobrze
                trafiłeś! W całej Polsce znajdziesz coraz więcej restauracji
                bezglutenowych – od tradycyjnych polskich, przez włoskie
                pizzerie, aż po aromatyczne indyjskie knajpki czy bary z
                kebabem. Bez względu na to, jaką kuchnię lubisz najbardziej,
                możesz cieszyć się pełnią smaku bez obaw o gluten.
              </p>

              <h2>Dlaczego warto odwiedzać restauracje bezglutenowe?</h2>
              <p>
                Nowoczesne restauracje bezglutenowe w Polsce łączą pasję do
                gotowania z dbałością o zdrowie. Szefowie kuchni wykorzystują
                naturalne, lokalne składniki i wysokiej jakości zamienniki mąk
                pszenicznych, tworząc dania lekkie, aromatyczne i bezpieczne dla
                osób z nietolerancją glutenu. Wybierając takie miejsca, możesz:
              </p>

              <ul>
                <li>
                  odkrywać bezglutenowe wersje ulubionych potraw z różnych stron
                  świata,
                </li>
                <li>
                  mieć pewność, że dania są przygotowywane z troską o zdrowie i
                  jakość,
                </li>
                <li>poznawać nowe interpretacje klasycznych receptur,</li>
                <li>cieszyć się posiłkiem bez ryzyka kontaktu z glutenem.</li>
              </ul>

              <p>
                Od bezglutenowych pierogów i makaronów po curry, pizzę czy
                kebaby – restauracje bezglutenowe w Polsce pokazują, że zdrowe
                jedzenie może być równie pyszne i różnorodne. To doskonały wybór
                dla wszystkich, którzy chcą łączyć świadome odżywianie z pasją
                do odkrywania nowych smaków.
              </p>
            </div>
          </div>

          <div className="listing-v1">
            {polishRestaurantsData
              .slice()
              .reverse()
              .map((recipe) => (
                <Link
                  key={recipe.id}
                  href={recipe.href}
                  className="listing-v1-slot"
                  target="_blank"
                >
                  <div className="listing-v1-slot__img">
                    <Image
                      src={recipe.imgSrc}
                      alt={recipe.altText}
                      width={400}
                      height={500}
                      loading="lazy"
                    />
                  </div>
                  <div className="listing-v1-slot__text">
                    <span>{recipe.description}</span>
                  </div>
                  <div className="listing-v1-slot__labels">
                    <span className={recipe.labelClass}>{recipe.label}</span>
                  </div>
                  <div className="listing-v1-slot__zoom">
                    <div className="zoom-box">
                      <CiInstagram />
                      <span>Zobacz</span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
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

export default PolishRestaurantsPage;
