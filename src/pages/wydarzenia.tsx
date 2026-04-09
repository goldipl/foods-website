import "@/sass/main.scss";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { CiInstagram } from "react-icons/ci";
import { eventsData } from "@/data/events/events";
import Topbar from "@/components/common/Topbar";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const EventsPage = () => {
  return (
    <>
      <Head>
        <title>
          Wydarzenia, warsztaty bezglutenowe i przydatne informacje - Ucz się i
          smakuj | Bezglutenowa Karola
        </title>
        <meta
          name="description"
          content="Bądź na bieżąco z eventami i warsztatami bezglutenowymi. Poznaj nowe receptury, dowiedz się więcej o celiakii i sprawdź moje codzienne menu."
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
              <h1>
                Wydarzenia, warsztaty bezglutenowe i przydatne informacje o
                celiakii – ucz się, smakuj i poznawaj
              </h1>
            </div>
            <div className="section-desc">
              <p>
                Interesujesz się kuchnią bezglutenową, a może niedawno
                zdiagnozowano u Ciebie celiakię? Życie z celiakią to znacznie
                więcej niż tylko zmiana jadłospisu – to nauka czytania etykiet,
                dbanie o bezpieczeństwo w kuchni i całkowita zmiana stylu życia.
                Znajdziesz tutaj nie tylko informacje o nadchodzących
                wydarzeniach, ale przede wszystkim potężną dawkę przydatnej
                wiedzy o tym, jak odnaleźć się w nowej rzeczywistości.
              </p>
              <p>
                Dzielę się z Tobą moimi codziennymi doświadczeniami oraz
                potrawami, które sama przygotowuję i jem na ścisłej diecie
                bezglutenowej. Chcę Ci pokazać, że jedzenie bez glutenu może być
                równie smaczne, różnorodne i w pełni bezpieczne. Moje przepisy
                to dowód na to, że dieta to nie wyrok, ale kulinarna przygoda!
              </p>
              <h2>
                Dlaczego warto uczestniczyć w warsztatach i śledzić wpisy?
              </h2>
              <p>
                Warsztaty kulinarne i wydarzenia branżowe to doskonała
                przestrzeń, w której możemy spotkać się na żywo i uczyć od
                siebie nawzajem. Co zyskasz, będąc częścią tej społeczności?
              </p>
              <ul>
                <li>
                  <strong>Praktyczną wiedzę o celiakii:</strong> dowiesz się,
                  jak unikać zanieczyszczeń krzyżowych i bezpiecznie
                  funkcjonować na co dzień.
                </li>
                <li>
                  <strong>Inspiracje kulinarne:</strong> poznasz moje sprawdzone
                  potrawy bezglutenowe oraz nauczysz się przygotowywać pyszne,
                  zdrowe dania od podstaw.
                </li>
                <li>
                  <strong>Nowe produkty i techniki:</strong> odkryjesz
                  zamienniki tradycyjnych mąk, które ułatwiają gotowanie i
                  pieczenie.
                </li>
                <li>
                  <strong>Wsparcie społeczności:</strong> wymienisz
                  doświadczenia z ludźmi, którzy doskonale rozumieją Twoje
                  codzienne zmagania z dietą.
                </li>
              </ul>
              <p>
                Wydarzenia bezglutenowe to nie tylko warsztaty – to także targi,
                festiwale i spotkania z ekspertami. To idealny moment na
                degustacje, pokazy gotowania i poznawanie certyfikowanych
                produktów.
              </p>
              <p>
                Niezależnie od tego, czy dopiero zaczynasz życie bez glutenu,
                czy jesteś już weteranem – zapraszam Cię do wspólnego odkrywania
                smaków, poszerzania wiedzy i cieszenia się dobrym jedzeniem w
                bezpiecznej atmosferze!
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
