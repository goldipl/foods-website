import "@/sass/main.scss";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CiInstagram } from "react-icons/ci";
import { eventsData } from "@/data/events/events";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const EventsPage = () => {
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
                Wydarzenia i warsztaty bezglutenowe – ucz się, smakuj i poznawaj
              </h1>
            </div>
            <div className="section-desc">
              <p>
                Interesujesz się zdrowym stylem życia i kuchnią bezglutenową? A
                może dopiero zaczynasz swoją przygodę z dietą bez glutenu?
                Wydarzenia i warsztaty bezglutenowe to doskonała okazja, by
                zdobyć praktyczną wiedzę, poznać nowe przepisy, a także spotkać
                ludzi, którzy – tak jak Ty – stawiają na zdrowie i świadome
                odżywianie.
              </p>
              <h2>Dlaczego warto uczestniczyć w warsztatach bezglutenowych?</h2>
              <p>
                Warsztaty kulinarne i wydarzenia bezglutenowe to coś więcej niż
                tylko gotowanie. To inspirujące spotkania, które pozwalają:
              </p>
              <ul>
                <li>
                  nauczyć się przygotowywać smaczne i zdrowe dania bez glutenu,
                </li>
                <li>
                  poznać produkty i techniki, które ułatwiają życie na diecie
                  bezglutenowej,
                </li>
                <li>wymienić doświadczenia z innymi uczestnikami,</li>
                <li>
                  zainspirować się pomysłami kucharzy, dietetyków i pasjonatów
                  zdrowego jedzenia.
                </li>
              </ul>
              <p>
                Podczas takich wydarzeń nie brakuje także degustacji, pokazów
                gotowania na żywo, a często również prelekcji o zdrowym stylu
                życia, zbilansowanej diecie i produktach naturalnych. To idealna
                przestrzeń, by odkrywać nowe smaki, zdobywać praktyczne
                umiejętności i dobrze się bawić.
              </p>
              <p>
                Wydarzenia bezglutenowe to nie tylko warsztaty kulinarne – to
                także targi, spotkania tematyczne i festiwale, podczas których
                możesz poznać producentów bezglutenowych produktów, znaleźć nowe
                inspiracje i odkryć, jak różnorodna i pyszna może być kuchnia
                bez glutenu.
              </p>
              <p>
                Niezależnie od tego, czy jesteś początkującym, czy doświadczonym
                kucharzem, warsztaty i wydarzenia bezglutenowe to doskonały
                sposób, by rozwijać pasję, poszerzać wiedzę i poznawać ludzi,
                którzy – tak jak Ty – cenią zdrowe jedzenie i dobrą atmosferę.
              </p>
            </div>
          </div>

          <div className="listing-v1">
            {eventsData
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

export default EventsPage;
