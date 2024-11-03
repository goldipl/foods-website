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
            <h2>Codziennie świeże informacje i pyszne przepisy</h2>
            <h1>
              Bezglutenowa Karola - bezglutenowe życie pełne smaków i aromatów
            </h1>
            <p>
              Witaj w moim świecie! Nazywa się Karolina Wontorska, a życie bez
              glutenu to moja codzienność – zmierzyłam się z celiakią w lipcu
              2023 roku i od tego czasu dzielę się tutaj swoimi doświadczeniami,
              sprawdzonymi przepisami i praktycznymi poradami.
            </p>
            <p>
              Znajdziesz u mnie przepisy na potrawy, które nie tylko są
              bezpieczne dla osób z nietolerancją glutenu, ale też smakowite i
              proste w przygotowaniu. Bezglutenowa Karola to miejsce, gdzie mogę
              wyrażać swoją pasję do gotowania i odkrywania nowych smaków.
            </p>
            <p>
              Polecam również restauracje specjalizujące się w kuchni
              bezglutenowej oraz dzielę się wskazówkami, jak świadomie i
              bezpiecznie wybierać produkty na co dzień. Dla mnie i całej
              społeczności Bezglutenowej Karoli zdrowie i smak zawsze idą w
              parze.
            </p>
            <p>
              Zapraszam do wspólnego odkrywania, smakowania i dzielenia się
              wyjątkowymi przepisami. Razem stwórzmy zdrową, pełną smaków
              przyszłość, pełną kulinarnych przygód!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
