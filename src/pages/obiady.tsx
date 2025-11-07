import "@/sass/main.scss";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CiInstagram } from "react-icons/ci";
import { dinnersRecipesData } from "@/data/recipes/dinners-recipes";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const DinnersPage = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <section id="category-page">
          <div className="section-description">
            <div className="section-title">
              <h1>Obiady bezglutenowe – sycące, zdrowe i pełne smaku</h1>
            </div>
            <div className="section-desc">
              <p>
                Szukasz inspiracji na obiady bezglutenowe, które będą nie tylko
                zdrowe, ale też naprawdę pyszne? Świetnie trafiłeś! Niezależnie
                od tego, czy musisz unikać glutenu z powodów zdrowotnych, czy po
                prostu chcesz jeść lekko i naturalnie – istnieje wiele sposobów,
                by przygotować pełnowartościowy posiłek bez pszenicy, żyta i
                jęczmienia.
              </p>
              <h2>Dlaczego warto wybierać obiady bezglutenowe?</h2>
              <p>
                Obiady bezglutenowe to doskonała propozycja dla każdego, kto dba
                o zdrowie i dobre samopoczucie. Taka dieta nie tylko wspiera
                trawienie, ale także może pomóc w utrzymaniu energii przez całe
                popołudnie. Regularne sięganie po bezglutenowe dania może:
              </p>
              <ul>
                <li>poprawić komfort trawienny i zmniejszyć wzdęcia,</li>
                <li>
                  zapewnić długotrwałe uczucie sytości bez uczucia ciężkości,
                </li>
                <li>wspierać odporność i ogólną kondycję organizmu,</li>
                <li>ułatwić utrzymanie prawidłowej masy ciała.</li>
              </ul>
              <p>
                W kuchni bezglutenowej nie trzeba rezygnować ze smaku – zamiast
                tradycyjnych składników możesz sięgnąć po ryż, kaszę jaglaną,
                komosę ryżową, warzywa i świeże zioła. Dzięki nim stworzysz
                aromatyczne, pożywne i kolorowe obiady, które zachwycą całą
                rodzinę!
              </p>
            </div>
          </div>

          <div className="listing-v1">
            {dinnersRecipesData
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

export default DinnersPage;
