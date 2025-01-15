import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-wrapper-top">
          <div className="footer-col">
            <h2>Przepisy</h2>
            <Link href="#sniadania">Śniadania</Link>
            <Link href="#obiady">Obiady</Link>
            <Link href="#desery">Desery</Link>
          </div>
          <div className="footer-col">
            <h2>Restauracje</h2>
            <Link href="#restauracje-polska">Polska</Link>
            <Link href="#restauracje-europa">Europa</Link>
          </div>
          <div className="footer-col">
            <h2>Czy to ma gluten?</h2>
            <Link href="#produkty">Lidl</Link>
            <Link href="#produkty">Biedronka</Link>
            <Link href="#produkty">Stokrotka</Link>
            <Link href="#produkty">Inne</Link>
          </div>
          <div className="footer-col">
            <h2>Celiakia i co dalej?</h2>
            <Link href="#celiakia-podstawowe-informacje">
              Podstawowe informacje
            </Link>
            <Link href="#pierwsze-kroki-po-diagnozie">
              Pierwsze kroki po diagnozie
            </Link>
            <Link
              href="https://www.youtube.com/watch?v=8TEFTAOyZss"
              target="_blank"
            >
              Jak wygląda życie z celiakią? (podcast)
            </Link>
          </div>
          <div className="footer-col">
            <h2>Dodatkowe informacje</h2>
            <Link href="#o-mnie">O mnie</Link>
            <Link href="#kontakt">Kontakt</Link>
            <Link
              href="https://www.instagram.com/bezglutenowakarola/"
              target="_blank"
            >
              Instagram
            </Link>
            <Link
              href="https://www.youtube.com/@bezglutenowakarola"
              target="_blank"
            >
              YouTube
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>@BezglutenowaKarola © {currentYear}</p>
        <span>
          Projekt i realizacja:
          <Link href="https://mgodlewskidev.pl/" target="_blank">
            mgodlewskidev.pl
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;
