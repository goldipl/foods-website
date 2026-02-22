import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "./../../../public/icons/header/bezglutenowakarola-logo.svg";
import { FOOTER_LINKS, BRAND_DATA } from "./../../utils/consts";

interface FooterLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-wrapper-brand">
          <div className="footer-wrapper-brand__logo">
            <Link href="/">
              <Image
                src={logo.src}
                alt="Bezglutenowa Karola Logo"
                height={90}
                width={300}
              />
            </Link>
          </div>
          <div className="footer-wrapper-brand__text">
            <small>{BRAND_DATA.description}</small>
          </div>
        </div>

        <div className="footer-wrapper-top">
          {(FOOTER_LINKS as FooterSection[]).map((section) => (
            <div className="footer-col" key={section.title}>
              <h2>{section.title}</h2>
              {section.links.map((link: FooterLink) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.isExternal ? "_blank" : undefined}
                  rel={link.isExternal ? "noopener noreferrer" : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          {BRAND_DATA.copy} © {currentYear}
        </p>
        <span>
          Projekt i realizacja:{" "}
          <Link
            href={BRAND_DATA.authorHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {BRAND_DATA.author}
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
