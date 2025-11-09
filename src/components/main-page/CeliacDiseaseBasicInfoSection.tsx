import React from "react";

const CeliacDiseaseBasicInfoSection = () => {
  return (
    <section className="celiac-disease-section info-title">
      <div className="celiac-disease-wrapper">
        <div className="section-title">
          <h2 id="celiakia-podstawowe-informacje">
            Celiakia - podstawowe informacje
          </h2>
        </div>

        <div className="item">
          <div className="number">1</div>
          <strong>Czym jest celiakia?</strong>
          <p>
            Celiakia, inaczej zwana chorobą trzewną, ma podłoże genetyczne i
            zaliczana jest do grupy chorób autoimmunologicznych. W układzie
            odpornościowym osoby chorej, po spożyciu glutenu dochodzi do
            niepożądanej reakcji immunologicznej. Mówiąc najprościej, reakcja ta
            jest skierowana przeciwko własnym tkankom organizmu chorego.
            Największe szkody zachodzą w jelicie cienkim, co prowadzi do stanu
            zapalnego jelit, zaniku kosmków jelitowych, co w następstwie
            ogranicza lub uniemożliwia wchłanianie składników odżywczych z
            pokarmów. Jednak oprócz jelita cienkiego, na niszczycielskie
            działanie glutenu narażone są również inne narządy chorego.
          </p>
        </div>

        <div className="item">
          <div className="number">2</div>
          <strong>Czym jest gluten?</strong>
          <p>
            Gluten jest mieszaniną białek (prolamin i glutenin)
            charakterystycznych dla produktów zbożowych takich jak np.:
            pszenica, żyto, jęczmień, orkisz, owies. Ten ostatni (m.in. ze
            względu na zanieczyszczenia podczas produkcji) musi być koniecznie
            oznaczony jako bezglutenowy.
          </p>
        </div>

        <div className="item">
          <div className="number">3</div>
          <strong>Jakie są objawy celiakii?</strong>
          <p>
            Na pewno nie są jednoznaczne i oczywiste jak wydaje się to w teorii.
            Celiakia może mieć postać klasyczną i nieklasyczną. W przypadku tej
            pierwszej charakterystycznymi objawami są m.in.: biegunki, utrata
            masy ciała, zaburzenia rozwoju, niski wzrost, wzdęty brzuch, ból
            brzucha. Natomiast w przypadku celiakii nieklasycznej (która jest
            spotykana znacznie częściej), objawy zaliczane są głównie do tych
            pozajelitowych m.in. anemia, afty, zaburzenia neurologiczne,
            depresja, psychozy, bóle kostne i stawowe, poronienia i problemy z
            płodnością, współistniejące choroby autoimmunologiczne, niedobór
            witamin i składników mineralnych i wiele innych.
          </p>
        </div>

        <div className="item">
          <div className="number">4</div>
          <strong>Jak leczyć celiakię?</strong>
          <p>
            Niestety choroba ta jest nieuleczalna. Jedyną metodą leczenia dla
            chorego jest stosowanie ścisłej diety bezglutenowej przez całe
            życie.
          </p>
        </div>

        <div className="item">
          <div className="number">5</div>
          <strong>
            Czy przy celiakii mogą pojawić się inne choroby autoimmunologiczne?
          </strong>
          <p>
            Tak. Choroby autoimmunologiczne mogą pojawiać się parami lub
            grupami, w każdym momencie życia, jak było również w moim przypadku.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CeliacDiseaseBasicInfoSection;
