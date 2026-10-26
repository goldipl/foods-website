import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IconType } from "react-icons";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";
import { HiArrowUp, HiMagnifyingGlass } from "react-icons/hi2";
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

const SOCIAL_ICONS: Record<string, IconType> = {
  Instagram: FaInstagram,
  YouTube: FaYoutube,
  Facebook: FaFacebookF,
};

const FOOTER_SECTIONS = FOOTER_LINKS as FooterSection[];

const SOCIAL_LINKS = FOOTER_SECTIONS.flatMap((section) => section.links)
  .filter((link) => link.isExternal && SOCIAL_ICONS[link.label]);

const INSTAGRAM_HREF =
  SOCIAL_LINKS.find((link) => link.label === "Instagram")?.href ?? "/";

const resolveHref = (href: string) =>
  href.startsWith("#") ? `/${href}` : href;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="footer">
      <span className="footer__orb footer__orb--one" aria-hidden="true" />
      <span className="footer__orb footer__orb--two" aria-hidden="true" />

      <div className="footer__inner">
        <div className="footer__cta">
          <div className="footer__cta-text">
            <span className="footer__eyebrow">
              💚 Bezglutenowa społeczność
            </span>
            <p className="footer__cta-title">Gotujmy razem bez glutenu</p>
            <p>
              Codzienne inspiracje, przepisy i sprawdzone miejsca znajdziesz
              też na moim Instagramie.
            </p>
          </div>
          <div className="footer__cta-actions">
            <Link
              href={INSTAGRAM_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__button"
            >
              <FaInstagram aria-hidden="true" />
              Obserwuj na Instagramie
            </Link>
            <Link
              href="/szukaj-przepisow"
              className="footer__button footer__button--ghost"
            >
              <HiMagnifyingGlass aria-hidden="true" />
              Szukaj przepisów
            </Link>
          </div>
        </div>

        <div className="footer__main">
          <div className="footer__brand">
            <Link href="/" className="footer__logo">
              <Image
                src={logo.src}
                alt="Bezglutenowa Karola Logo"
                height={53}
                width={231}
              />
            </Link>
            <p>{BRAND_DATA.description}</p>
            <div className="footer__socials">
              {SOCIAL_LINKS.map((link) => {
                const Icon = SOCIAL_ICONS[link.label];

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social"
                    aria-label={link.label}
                  >
                    <Icon aria-hidden="true" />
                  </Link>
                );
              })}
            </div>
          </div>

          <nav className="footer__nav" aria-label="Mapa strony">
            {FOOTER_SECTIONS.map((section) => (
              <div className="footer-col" key={section.title}>
                <h2>{section.title}</h2>
                <ul>
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={resolveHref(link.href)}
                        target={link.isExternal ? "_blank" : undefined}
                        rel={
                          link.isExternal ? "noopener noreferrer" : undefined
                        }
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="footer__bottom">
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
          <button
            type="button"
            className="footer__top-button"
            onClick={scrollToTop}
          >
            Do góry <HiArrowUp aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
