import React from "react";

const CeliacDiseaseSection = () => {
  return (
    <div className="celiac-disease-section">
      <div className="celiac-disease-wrapper">
        <h2 id="celiakia-podstawowe-informacje">
          Celiakia - podstawowe informacje
        </h2>

        <div className="item">
          <div className="number">1</div>
          <strong>Czym jest celiakia?</strong>
          <p>
            To przewlekła choroba autoimmunologiczna, w której spożycie glutenu
            prowadzi do uszkodzenia jelita cienkiego. Gluten to białko
            występujące w pszenicy, życie, jęczmieniu i owsie (chyba że jest
            specjalnie oznaczony jako bezglutenowy).
          </p>
        </div>

        <div className="item">
          <div className="number">2</div>
          <strong>Przyczyny</strong>
          <p>
            Celiakia jest częściowo uwarunkowana genetycznie. Może ujawnić się
            na każdym etapie życia, często po infekcjach, ciąży, stresie lub
            innych wydarzeniach wywołujących stres dla organizmu.
          </p>
        </div>

        <div className="item">
          <div className="number">3</div>
          <strong>Objawy</strong>
          <p>
            Objawy są zróżnicowane i mogą obejmować ból brzucha, biegunki,
            wzdęcia, zmęczenie, utratę masy ciała, a także objawy nietypowe, jak
            anemię, bóle stawów, problemy skórne i zaburzenia neurologiczne.
          </p>
        </div>

        <h2 id="celiakia-co-dalej">
          Celiakia - i co dalej? <br></br>Pierwsze kroki po diagnozie
        </h2>

        <div className="item">
          <div className="number">1</div>
          <strong>W kuchni</strong>
          <div className="subitem">
            <p>Wymień wszystkie przyprawy w kuchni na bezglutenowe</p>
          </div>
        </div>

        <div className="item">
          <div className="number">2</div>
          <strong>Zakupy</strong>
          <p>
            Produkty sypkie jak mąki, kasze, ryże kupuj tylko ze znaczkiem
            przekreślonego kłosa
          </p>
        </div>

        <div className="item">
          <div className="number">3</div>
          <strong>Czytaj etykiety</strong>
          <p>
            Nie panikuj! Wiele produktów w każdym sklepie jest bezglutenowa -
            tylko na pierwszy rzut oka tego nie widać - musisz nauczyć się
            czytać składy
          </p>
        </div>

        <div className="item">
          <div className="number">4</div>
          <strong>Nie kupuj gotowych mięs na grilla</strong>
          <p>
            Unikaj gotowych mięs na grilla lub innych mieszanek, lepiej wybierz
            czyste mięso i dopraw w domu
          </p>
        </div>

        <div className="item">
          <div className="number">5</div>
          <strong>Porządek w kuchni</strong>
          <p>
            Jeśli dzielisz kuchnię z osobami jedzącymi gluten, dbaj o czystość i
            osobne przybory kuchenne
          </p>
        </div>

        <div className="item">
          <div className="number">6</div>
          <strong>Przechowywanie produktów</strong>
          <p>Nie trzymaj razem produktów glutenowych z bezglutenowymi</p>
        </div>

        <div className="item">
          <div className="number">7</div>
          <strong>Opakowania</strong>
          <p>Kup sobie praktyczne pudełka i torbę termiczną</p>
        </div>

        <div className="item">
          <div className="number">8</div>
          <strong>Wizyta u dietetyka</strong>
          <p>
            Umów się na choć jedną konsultację z dietetykiem, aby omówić
            szczegóły swojej nowej diety
          </p>
        </div>
      </div>
    </div>
  );
};

export default CeliacDiseaseSection;
