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
            <h2>Przepisy</h2>
            <Link href="#sniadania">Śniadania</Link>
            <Link href="#obiady">Obiady</Link>
            <Link href="#desery">Desery</Link>
          </div>
          <div className="footer-col">
            <h2>Przepisy</h2>
            <Link href="#sniadania">Śniadania</Link>
            <Link href="#obiady">Obiady</Link>
            <Link href="#desery">Desery</Link>
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
