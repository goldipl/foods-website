import "@/sass/main.scss";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CiInstagram } from "react-icons/ci";
import { productsData } from "@/data/products/products";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const ProductsPage = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <section id="category-page">
          <div className="section-description">
            <div className="section-title">
              <h1>Produkty bezglutenowe – zdrowy wybór na co dzień</h1>
            </div>
            <div className="section-desc">
              <p>
                Szukasz sprawdzonych produktów bezglutenowych, które są zdrowe,
                smaczne i pełne wartości odżywczych? Dobrze trafiłeś! Coraz
                więcej osób wybiera dietę bezglutenową nie tylko ze względów
                zdrowotnych, ale także z chęci jedzenia lżej i bardziej
                naturalnie. Dzięki szerokiemu wyborowi produktów bezglutenowych,
                możesz bez trudu skomponować pełnowartościowe posiłki – od
                śniadania po kolację.
              </p>
              <h2>Dlaczego warto wybierać produkty bezglutenowe?</h2>
              <p>
                Produkty bezglutenowe to doskonałe rozwiązanie dla osób z
                celiakią, nietolerancją glutenu lub po prostu dbających o zdrowy
                styl życia. Ich regularne stosowanie może:
              </p>
              <ul>
                <li>poprawić trawienie i samopoczucie po posiłkach,</li>
                <li>zmniejszyć uczucie ciężkości i wzdęć,</li>
                <li>wspomóc pracę układu odpornościowego,</li>
                <li>
                  dostarczyć organizmowi naturalnych składników odżywczych.
                </li>
              </ul>
              <p>
                W sklepach znajdziesz coraz więcej produktów bezglutenowych,
                takich jak: pieczywo z mąk ryżowych i gryczanych, makarony
                kukurydziane, ciastka i batony bezglutenowe, a także przyprawy,
                sosy i przekąski oznaczone symbolem „przekreślonego kłosa”.
                Dzięki nim możesz cieszyć się różnorodną, smaczną i bezpieczną
                dietą – bez konieczności rezygnowania z ulubionych potraw.
              </p>
              <p>
                Produkty bezglutenowe to nie chwilowa moda, lecz świadomy wybór,
                który wspiera zdrowie i dobre samopoczucie. Sięgaj po nie na co
                dzień, a Twoja dieta stanie się lżejsza, bardziej naturalna i
                pełna energii.
              </p>
            </div>
          </div>

          <div className="listing-v1">
            {productsData
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

export default ProductsPage;
