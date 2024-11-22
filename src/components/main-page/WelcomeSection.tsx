import Image from "next/image";
import React from "react";
import karolaImg from "./../../../public/img/welcome/karola.jpg";

const WelcomeSection = () => {
  return (
    <div id="o-mnie" className="welcome-section">
      <div className="welcome-section-wrapper">
        <div className="img-text-box">
          <div className="img-box">
            <Image
              className="border-img"
              src={karolaImg}
              alt="bezglutenowa Karola"
              width={400}
              height={491}
            ></Image>
          </div>
          <div className="text-box">
            <h2>Cześć! Miło mi że tu jesteś 😊</h2>

            <p>
              Jeśli tu trafiłaś/eś, zapewne temat diety bezglutenowej nie jest
              Ci obcy z jakiegoś powodu. Rozgość się, a ja postaram się pomóc w
              tej sytuacji.
            </p>

            <p>
              Nazywam się <strong>Karolina Wontorska</strong>. Od dziecka zmagam
              się z chorobami autoimmunologicznymi. Najpierw zdiagnozowano u
              mnie łysienie plackowate, potem Hashimoto, a w czerwcu 2023 roku
              celiakię.
            </p>

            <p>
              Czy był to dla mnie szok? Tak, ale jednocześnie ulga, że po roku
              poszukiwań wreszcie otrzymałam diagnozę.
            </p>

            <p>
              Miałam to szczęście, że przejście na dietę bezglutenową było dla
              mnie stosunkowo prostym i płynnym procesem. Już wcześniej, od 2020
              roku, mocno ograniczyłam gluten, a także cukier i nabiał. Nie
              jadłam takich typowych glutenowych produktów jak pizza, pierogi
              czy makarony. Odkryłam inne mąki niż pszenna i unikałam pieczywa.
              Jednak gluten wciąż pojawiał się w innych produktach, ponieważ nie
              miałam jeszcze pełnej świadomości, gdzie może się znajdować, ani
              że nawet śladowe ilości glutenu mają znaczenie. Wtedy poczułam się
              znacznie lepiej, zarówno fizycznie, jak i psychicznie. Zaczęłam
              wyglądać zdrowo i czułam przypływ energii. Był to też moment w
              moim życiu, gdy postanowiłam zdrowo się odżywiać, a jednocześnie
              zaczęłam działać kulinarnie na Instagramie.
            </p>

            <p>
              Dlaczego nie zbadałam się wtedy pod kątem celiakii? Nie
              przypuszczałam, że mogę ją mieć, i zwyczajnie nie wiedziałam zbyt
              wiele na temat tej choroby.
            </p>

            <p>
              W 2022 roku zaczęłam jednak bardzo chudnąć, czułam się ciągle
              zmęczona i wyniszczona, a moje włosy wypadały w zastraszającym
              tempie. Poziom ferrytyny był ekstremalnie niski, a dodatkowo
              pojawiały się dziwne objawy, takie jak krwawienie z odbytu.
              Badania stały się koniecznością. Trafiałam na różnych lekarzy,
              którzy czasami sugerowali, że „sama szukam sobie choroby”. Byłam
              jednak zdeterminowana, aż w końcu znalazłam lekarza, który
              połączył wszystkie kropki. Niedługo potem przeszłam gastroskopię i
              kolonoskopię, co ostatecznie doprowadziło do diagnozy:{" "}
              <strong>CELIAKIA</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
