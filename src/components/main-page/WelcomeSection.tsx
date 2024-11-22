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
              Jeśli tu trafiłaś/eś, zapewne temat bezglutenowej diety nie jest
              Ci z jakiegoś powodu obcy. Rozgość się, a ja postaram się Ci w tej
              sytuacji pomóc.
            </p>

            <p>
              Nazywam się <strong>Karolina Wontorska</strong>, od dziecka zmagam
              się z chorobami autoimmunologicznymi, najpierw zdiagnozowano u
              mnie łysienie plackowate, potem hashimoto, a w czerwcu 2023 roku
              celiakię.
            </p>

            <p>
              Czy był to dla mnie szok? Tak, ale jednocześnie ulga, że po roku
              poszukiwań, miałam już diagnozę.
            </p>

            <p>
              Miałam to szczęście, że przejście na bezglutenową dietę było dla
              mnie dość prostym i płynnym procesem, bo już wcześniej, od 2020
              gluten mocno ograniczyłam, podobnie jak cukier czy nabiał. Nie
              jadłam takich typowych glutenowych produktów jak pizza, pierogi,
              makarony, odkryłam inne mąki niż pszenna, unikałam pieczywa, ale w
              innych produktach gluten był - nie miałam wtedy pełnej świadomości
              i konieczności by wiedzieć gdzie on może się znajdować i że
              śladowe ilości glutenu są istotne. Wtedy odżyłam, czułam się
              wreszcie dobrze, wyglądałam dobrze. Miałam też wtedy w swoim życiu
              pewien moment, w którym postanowiłam po prostu zdrowo się
              odżywiać, wtedy też zaczęłam działać w kulinarnym kierunku na
              Instagramie.
            </p>

            <p>
              Jak to się stało, że wówczas nie zbadałam się w kierunku celiakii?
              Nie przypuszczałam że mogę to mieć i zwyczajnie nie wiedziałam na
              temat tej choroby zbyt wiele.
            </p>

            <p>
              Natomiast gdy w 2022 zaczęłam bardzo chudnąć, czuć się ciągle
              zmęczona, wyniszczona, moje włosy wypadały z dnia na dzień, poziom
              ferrytyny był na bardzo niskim poziomie i pojawiały się dodatkowe
              dziwne objawy jak np krwawienie z odbytu, badania były konieczne.
              Trafiałam na różnych lekarzy i pomimo ich wymownych sugestii, że
              „sama szukam sobie choroby” byłam zmotywowana, aż trafiłam na
              kogoś kto połączył wszystkie kropki. Niedługo potem byłam po
              gastroskopii, kolonoskopii, a potem była diagnoza:{" "}
              <strong>CELIAKIA</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
