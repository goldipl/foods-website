import "@/sass/main.scss";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CiInstagram } from "react-icons/ci";
import { hotelsData } from "@/data/hotels/hotels";
import Topbar from "@/components/common/Topbar";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const HotelsPage = () => {
  return (
    <>
      <Head>
        <title>Produkty Bezglutenowe | Bezglutenowa Karola</title>
        <meta
          name="description"
          content="Odkryj najlepsze produkty bezglutenowe dostępne na rynku. Wybierane przez Karolinę - naturalne, zdrowe i smaczne produkty bez glutenu."
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
              <h1>Hotele bezglutenowe – zdrowy wybór na co dzień</h1>
            </div>
            <div className="section-desc">
              <p>
                Dla osób chorujących na celiakię nawet śladowe ilości glutenu
                mogą być niebezpieczne. Dlatego tak ważne jest wybieranie
                miejsc, które rozumieją potrzeby diety bezglutenowej i dbają o
                bezpieczeństwo przygotowywanych potraw. Profesjonalne hotele i
                pensjonaty bezglutenowe oferują:
              </p>
              <ul>
                <li>oddzielne przygotowywanie posiłków bez glutenu,</li>
                <li>produkty certyfikowane i sprawdzone składniki,</li>
                <li>
                  przeszkolony personel świadomy zasad diety bezglutenowej,
                </li>
                <li>minimalizację ryzyka zanieczyszczenia krzyżowego,</li>
                <li>
                  bezpieczne śniadania, obiady i kolacje dla osób z celiakią.
                </li>
              </ul>
              <p>
                W wielu obiektach dostępne są specjalne strefy śniadaniowe,
                osobne tostery, oznaczone produkty oraz możliwość przygotowania
                indywidualnych posiłków dostosowanych do potrzeb gości. Dzięki
                temu osoby na diecie bezglutenowej mogą podróżować komfortowo i
                bez stresu.
              </p>
              <h2>Bezpieczne wyżywienie podczas urlopu</h2>
              <p>
                Bezpieczna dieta podczas wyjazdu to podstawa dobrego
                samopoczucia. Hotele i pensjonaty przyjazne osobom z celiakią
                coraz częściej współpracują z dietetykami oraz korzystają z
                produktów bezglutenowych najwyższej jakości. W menu można
                znaleźć między innymi świeże pieczywo bezglutenowe, makarony
                kukurydziane i ryżowe, naturalne dania obiadowe, a także desery
                i przekąski bez glutenu.
              </p>
              <p>
                Wybierając sprawdzony hotel bezglutenowy, zyskujesz pewność, że
                każdy posiłek będzie przygotowany z należytą starannością i
                zgodnie z zasadami diety bezglutenowej. To idealne rozwiązanie
                dla rodzin z dziećmi, osób z celiakią oraz wszystkich, którzy
                chcą odpoczywać zdrowo i bezpiecznie.
              </p>
              <p>
                Coraz więcej obiektów noclegowych w Polsce i za granicą oferuje
                kompleksowe podejście do diety bezglutenowej, dzięki czemu
                podróże stają się łatwiejsze, przyjemniejsze i w pełni
                komfortowe dla osób wymagających specjalnego żywienia.
              </p>
            </div>
          </div>

          <div className="listing-v1">
            {hotelsData
              .slice()
              .reverse()
              .slice(0, 4)
              .map((hotel) => (
                <Link
                  key={hotel.id}
                  href={hotel.href}
                  className="listing-v1-slot"
                  target="_blank"
                >
                  <div className="listing-v1-slot__img">
                    <Image
                      src={hotel.imgSrc}
                      alt={hotel.altText}
                      width={400}
                      height={500}
                      loading="lazy"
                    />
                  </div>
                  <div className="listing-v1-slot__text">
                    <span>{hotel.description}</span>
                  </div>
                  <div className="listing-v1-slot__labels">
                    <span className={hotel.labelClass}>{hotel.label}</span>
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

export default HotelsPage;
