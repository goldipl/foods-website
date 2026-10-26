import Image from "next/image";
import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";
import SectionHeader from "@/components/common/SectionHeader";
import karolaImg from "./../../../public/img/welcome/karola.jpg";

const WelcomeSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="o-mnie" className="welcome-section home-section">
      <div className="welcome-section-wrapper home-section__wrapper">
        <div className="welcome-section__grid">
          <div className="welcome-section__media">
            <div className="welcome-section__photo">
              <Image
                src={karolaImg}
                alt="bezglutenowa Karola"
                width={400}
                height={491}
                sizes="(max-width: 992px) 80vw, 420px"
              />
            </div>
            <span
              className="welcome-section__badge welcome-section__badge--top"
              aria-hidden="true"
            >
              💚 Celiakia od 2023
            </span>
            <span
              className="welcome-section__badge welcome-section__badge--bottom"
              aria-hidden="true"
            >
              <strong>Karolina</strong>
              Bezglutenowa Karola
            </span>
          </div>

          <div className="welcome-section__content">
            <SectionHeader
              eyebrow="O mnie"
              title="Cześć! Miło mi, że tu jesteś!"
            />
            <p className="welcome-section__lead">
              Jeśli tu trafiłaś/eś, zapewne temat diety bezglutenowej nie jest
              Ci z jakiegoś powodu obcy. Rozgość się, a ja postaram Ci w tej
              sytuacji pomóc.
            </p>
            <p>
              Nazywam się <strong>Karolina Wontorska-Godlewska</strong>. Od
              dziecka zmagam się z chorobami autoimmunologicznymi. Najpierw
              zdiagnozowano u mnie łysienie plackowate, potem Hashimoto, a w
              czerwcu 2023 roku celiakię.
            </p>
            <p>
              Czy był to dla mnie szok? Tak, ale jednocześnie ulga, że po roku
              poszukiwań, wreszcie otrzymałam diagnozę.
            </p>
            <div
              id="o-mnie-wiecej"
              className={`more-text ${isOpen ? "open" : ""}`}
            >
              <p>
                Miałam to szczęście, że przejście na dietę bezglutenową było dla
                mnie stosunkowo prostym i płynnym procesem. Już wcześniej, od
                2020 roku, mocno ograniczyłam gluten, a także cukier i nabiał.
                Nie jadłam takich typowych glutenowych produktów jak pizza,
                pierogi czy makarony. Używałam innych mąk niż pszenna i unikałam
                pieczywa. Jednak gluten wciąż pojawiał się w innych produktach,
                ponieważ nie miałam jeszcze pełnej świadomości, gdzie może się
                znajdować, ani że nawet śladowe ilości glutenu mają znaczenie.
                Wtedy poczułam się znacznie lepiej, zarówno fizycznie, jak i
                psychicznie. Zaczęłam wyglądać zdrowo i czułam przypływ energii.
                Był to też moment w moim życiu, gdy postanowiłam zdrowo się
                odżywiać, a jednocześnie zaczęłam rozwijać konto na Instagramie
                w kierunku kulinarnym.
              </p>
              <p>
                Dlaczego nie zbadałam się wtedy pod kątem celiakii? Nie
                przypuszczałam, że mogę ją mieć, i zwyczajnie nie wiedziałam
                zbyt wiele na temat tej choroby.
              </p>
              <p>
                W 2022 roku zaczęłam jednak bardzo chudnąć, czułam się ciągle
                zmęczona i byłam wyniszczona, a moje włosy wypadały w
                zastraszającym tempie. Poziom ferrytyny był ekstremalnie niski,
                a dodatkowo pojawiały się dziwne objawy, takie jak krwawienie z
                odbytu. Badania stały się koniecznością. Trafiałam na różnych
                lekarzy, którzy czasami sugerowali, że „sama szukam sobie
                choroby”. Byłam jednak zdeterminowana, aż w końcu znalazłam
                lekarza, który połączył wszystkie kropki. Niedługo potem
                przeszłam gastroskopię i kolonoskopię, co ostatecznie
                doprowadziło do diagnozy: <strong>CELIAKIA</strong>.
              </p>
            </div>

            <button
              type="button"
              className="welcome-section__toggle"
              aria-expanded={isOpen}
              aria-controls="o-mnie-wiecej"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "Zwiń" : "Dowiedz się więcej o mnie"}
              <HiChevronDown aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
