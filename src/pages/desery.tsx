import "@/sass/main.scss";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CiInstagram } from "react-icons/ci";
import { dessertsRecipesData } from "@/data/recipes/desserts-recipes";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const DessertsPage = () => {
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
                Desery bezglutenowe – słodka przyjemność bez wyrzutów sumienia
              </h1>
            </div>
            <div className="section-desc">
              <p>
                Marzysz o pysznych deserach bezglutenowych, które zachwycą
                smakiem, a przy tym będą lekkie i zdrowe? Jesteś we właściwym
                miejscu! Niezależnie od tego, czy unikasz glutenu z powodów
                zdrowotnych, czy po prostu chcesz spróbować zdrowszych słodkości
                – bezglutenowe desery potrafią zaskoczyć swoją różnorodnością i
                smakiem.
              </p>
              <h2>Dlaczego warto wybierać desery bezglutenowe?</h2>
              <p>
                Desery bez glutenu to doskonała alternatywa dla tradycyjnych
                wypieków i słodkości. Dzięki nim możesz cieszyć się ulubionymi
                smakami bez obaw o uczucie ciężkości czy problemy trawienne.
                Wybierając bezglutenowe słodkości, możesz:
              </p>
              <ul>
                <li>
                  unikać zbędnych alergenów i poprawić samopoczucie po jedzeniu,
                </li>
                <li>cieszyć się lekkimi, naturalnymi składnikami,</li>
                <li>wspierać zdrowe trawienie i równowagę organizmu,</li>
                <li>
                  odkrywać nowe smaki dzięki mąkom ryżowym, kokosowym czy
                  migdałowym.
                </li>
              </ul>
              <p>
                Bezglutenowe desery mogą być równie słodkie i pyszne jak
                tradycyjne – wystarczy odrobina kreatywności! Brownie z mąki
                gryczanej, serniki bez spodu, kokosowe ciasteczka czy owocowe
                crumble to tylko kilka pomysłów na zdrowe słodkości bez glutenu,
                które pokochają zarówno dzieci, jak i dorośli.
              </p>
            </div>
          </div>

          <div className="listing-v1">
            {dessertsRecipesData
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

export default DessertsPage;
