import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "./../../../public/icons/header/bezglutenowakarola-logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-wrapper-brand">
          <div className="footer-wrapper-brand__logo">
            <Link href="/">
              <Image
                src={logo.src}
                alt="Czytam przed seksem"
                height={90}
                width={300}
              />
            </Link>
          </div>
          <div className="footer-wrapper-brand__text">
            <small>
              Nazywam się Karolina Wontorska i zapraszam Cię do mojego
              bezglutenowego świata.
            </small>
          </div>
        </div>
        <div className="footer-wrapper-top">
          <div className="footer-col">
            <h2>Przepisy</h2>
            <Link href="#sniadania">Śniadania</Link>
            <Link href="#obiady">Obiady</Link>
            <Link href="#desery">Desery / Słodkości</Link>
            <Link href="#przystawki">Przystawki / Przekąski</Link>
          </div>
          <div className="footer-col">
            <h2>Restauracje</h2>
            <Link href="#restauracje-polska">Polska</Link>
            <Link href="#restauracje-europa">Europa</Link>
            <Link href="/bezglutenowe-miejsca">Mapa miejsc bezglutenowych</Link>
          </div>
          <div className="footer-col">
            <h2>Produkty</h2>
            <Link href="#produkty">Lidl</Link>
            <Link href="#produkty">Biedronka</Link>
            <Link href="#produkty">Stokrotka</Link>
            <Link href="#produkty">Aldi</Link>
            <Link href="#produkty">Kaufland</Link>
            <Link href="#produkty">Żabka</Link>
            <Link href="#produkty">Carrefour</Link>
            <Link href="#produkty">Half Price</Link>
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
            <Link href="/#video">Jak wygląda życie z celiakią? (podcast)</Link>
            <Link href="#wydarzenia">Wydarzenia i wiele więcej :)</Link>
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
            <Link
              href="https://www.facebook.com/profile.php?id=61576336200554"
              target="_blank"
            >
              Facebook
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
