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
                Polskie restauracje bezglutenowe – tradycyjny smak w nowoczesnym
                wydaniu
              </h1>
            </div>
            <div className="section-desc">
              <p>
                Kochasz tradycyjną polską kuchnię, ale unikasz glutenu? Dobrze
                trafiłeś! Coraz więcej restauracji w Polsce oferuje dania
                bezglutenowe, dzięki którym możesz cieszyć się ulubionymi
                smakami bez obaw o zdrowie i samopoczucie. Pierogi, schabowy,
                zupy czy naleśniki – wszystko w wersji bez glutenu, z
                zachowaniem pełni aromatu i domowego charakteru.
              </p>
              <h2>
                Dlaczego warto odwiedzać polskie restauracje bezglutenowe?
              </h2>
              <p>
                Polskie restauracje bezglutenowe łączą tradycję z
                nowoczesnością. Szefowie kuchni coraz częściej sięgają po
                naturalne, lokalne składniki i zamienniki mąk pszenicznych,
                dzięki czemu dania są lekkie, smaczne i bezpieczne dla osób z
                nietolerancją glutenu. Wybierając takie miejsca, możesz:
              </p>
              <ul>
                <li>
                  delektować się autentycznymi smakami polskiej kuchni w wersji
                  bezglutenowej,
                </li>
                <li>
                  mieć pewność, że potrawy są przygotowane z dbałością o
                  zdrowie,
                </li>
                <li>poznawać nowe interpretacje klasycznych przepisów,</li>
                <li>cieszyć się posiłkiem bez ryzyka kontaktu z glutenem.</li>
              </ul>
              <p>
                Od bezglutenowych pierogów i naleśników po tradycyjne zupy i
                dania główne – polskie restauracje bezglutenowe udowadniają, że
                kuchnia bez glutenu może być równie pyszna, aromatyczna i
                sycąca. To idealny wybór dla wszystkich, którzy chcą łączyć
                zdrowie z miłością do klasycznych polskich smaków.
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
