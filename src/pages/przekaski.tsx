import "@/sass/main.scss";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CiInstagram } from "react-icons/ci";
import { appetizersRecipesData } from "@/data/recipes/appetizers-recipes";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const AppetizersPage = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <section id="category-page">
          <div className="section-description">
            <div className="section-title">
              <h1>Przekąski bezglutenowe – lekkie i smaczne na każdą okazję</h1>
            </div>
            <div className="section-desc">
              <p>
                Szukasz pomysłów na przekąski bezglutenowe, które są chrupiące,
                pożywne i pełne smaku? Dobrze trafiłeś! Bez względu na to, czy
                potrzebujesz czegoś na szybki lunch, spotkanie ze znajomymi czy
                zdrową przystawkę na imprezę – bezglutenowe przekąski i
                przystawki mogą być równie pyszne, jak ich tradycyjne
                odpowiedniki.
              </p>
              <h2>Dlaczego warto wybierać przekąski bezglutenowe?</h2>
              <p>
                Bezglutenowe przekąski to świetny sposób na urozmaicenie
                codziennego menu i dbanie o dobre samopoczucie. Dzięki
                naturalnym składnikom i braku glutenu, są lekkostrawne, a
                jednocześnie dostarczają energii w ciągu dnia. Włączenie ich do
                diety może:
              </p>
              <ul>
                <li>zmniejszyć uczucie ciężkości po jedzeniu,</li>
                <li>pomóc w utrzymaniu stabilnego poziomu energii,</li>
                <li>wspierać zdrowe trawienie i odporność,</li>
                <li>
                  dostarczać cennych składników odżywczych bez zbędnych
                  dodatków.
                </li>
              </ul>
              <p>
                Bezglutenowe przystawki i przekąski mogą mieć wiele form – od
                warzywnych chipsów i hummusu, po mini kanapki z pieczywa
                bezglutenowego, sałatki czy kulki mocy z orzechami i daktylami.
                To doskonały wybór dla każdego, kto ceni sobie smak, zdrowie i
                wygodę w jednym!
              </p>
            </div>
          </div>

          <div className="listing-v1">
            {appetizersRecipesData
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

export default AppetizersPage;
