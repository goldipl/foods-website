import "@/sass/main.scss";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CiInstagram } from "react-icons/ci";
import { europeanRestaurantsData } from "@/data/restaurants/european-restaurants";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const EuropeanRestaurantsData = () => {
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
                Restauracje bezglutenowe w Europie – podróż po smakach bez
                ograniczeń
              </h1>
            </div>
            <div className="section-desc">
              <p>
                Planujesz podróż po Europie i zastanawiasz się, gdzie dobrze
                zjeść bez glutenu? Dobrze trafiłeś! Coraz więcej europejskich
                restauracji oferuje pyszne, bezpieczne i różnorodne dania
                bezglutenowe, które pozwalają cieszyć się lokalnymi smakami bez
                obaw. Od włoskiej pasty, przez cypryjskie meze, aż po rumuńskie
                specjały – kuchnia bezglutenowa w Europie zaskakuje bogactwem
                smaków i aromatów.
              </p>
              <h2>
                Dlaczego warto szukać restauracji bezglutenowych w Europie?
              </h2>
              <p>
                Podróżowanie z dietą bezglutenową nie musi być trudne –
                wystarczy wiedzieć, gdzie szukać! W wielu krajach Europy coraz
                popularniejsze są restauracje i kawiarnie, które specjalizują
                się w daniach bez glutenu. Odwiedzając je, możesz:
              </p>
              <ul>
                <li>poznać lokalne kuchnie w wersji bezglutenowej,</li>
                <li>jeść bez stresu i ryzyka kontaktu z glutenem,</li>
                <li>odkrywać nowe smaki i tradycje kulinarne,</li>
                <li>cieszyć się pełnią podróży – zdrowo i bez ograniczeń.</li>
              </ul>
              <p>
                <strong>Włochy</strong> słyną z szerokiego wyboru restauracji
                oferujących bezglutenowe pizze, makarony i desery – to prawdziwy
                raj dla miłośników kuchni śródziemnomorskiej. Na{" "}
                <strong>Cyprze</strong> bezglutenowe meze, grillowane ryby i
                świeże sałatki zachwycą każdego, kto szuka lekkich i naturalnych
                smaków. W <strong>Rumunii</strong> z kolei coraz więcej lokali
                proponuje tradycyjne dania, takie jak sarmale czy ciorbă,
                przygotowane z myślą o osobach unikających glutenu.
              </p>
              <p>
                Europejskie restauracje bezglutenowe udowadniają, że
                podróżowanie z dietą bezglutenową może być prawdziwą kulinarną
                przygodą – smaczną, bezpieczną i pełną niezapomnianych
                doświadczeń.
              </p>
            </div>
          </div>

          <div className="listing-v1">
            {europeanRestaurantsData
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

export default EuropeanRestaurantsData;
