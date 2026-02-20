import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import logo from "./../../../public/icons/header/bezglutenowakarola-logo.svg";
import menuDownIcon from "./../../../public/icons/common/menu-down-icon.svg";
import instagramIcon from "./../../../public/icons/common/instagram.svg";
import youTubeIcon from "./../../../public/icons/common/youtube.svg";
import facebookIcon from "./../../../public/icons/common/facebook.svg";
import mapIcon from "./../../../public/img/map/map-icon.png";

interface HeaderNavItem {
  label: string;
  href?: string;
  children?: HeaderNavItem[];
  grid?: boolean;
  className?: string;
}

const HEADER_NAV_ITEMS: HeaderNavItem[] = [
  {
    label: "Przepisy",
    children: [
      { label: "Śniadania", href: "/#sniadania" },
      { label: "Obiady", href: "/#obiady" },
      { label: "Desery", href: "/#desery" },
      { label: "Przystawki / Przekąski / Sałatki", href: "/#przystawki" },
    ],
  },
  {
    label: "Restauracje",
    children: [
      {
        label: "Polska",
        children: [
          { label: "Warszawa", href: "/#restauracje-polska" },
          { label: "Trójmiasto", href: "/#restauracje-polska" },
          { label: "Kraków", href: "/#restauracje-polska" },
          { label: "Kielce", href: "/#restauracje-polska" },
          { label: "Zakopane", href: "/#restauracje-polska" },
        ],
      },
      {
        label: "Europa",
        children: [
          { label: "Włochy", href: "/#restauracje-europa" },
          { label: "Cypr", href: "/#restauracje-europa" },
          { label: "Rumunia", href: "/#restauracje-europa" },
        ],
      },
      { label: "Mapa miejsc bezglutenowych", href: "/bezglutenowe-miejsca" },
    ],
  },
  {
    label: "Produkty",
    grid: true,
    children: [
      { label: "Lidl", href: "/#produkty" },
      { label: "Biedronka", href: "/#produkty" },
      { label: "Stokrotka", href: "/#produkty" },
      { label: "Żabka", href: "/#produkty" },
      { label: "Incola", href: "/#produkty" },
      { label: "Glutenex", href: "/#produkty" },
    ],
  },
  {
    label: "Celiakia (co dalej?)",
    children: [
      {
        label: "Podstawowe informacje",
        href: "/#celiakia-podstawowe-informacje",
      },
      {
        label: "Pierwsze kroki po diagnozie",
        href: "/#pierwsze-kroki-po-diagnozie",
      },
      { label: "Jak wygląda życie z celiakią?", href: "/#video" },
    ],
  },
  { label: "O mnie", href: "/#o-mnie" },
  { label: "Kontakt", href: "/#kontakt", className: "contact" },
];

const HEADER_SOCIAL_LINKS = [
  {
    label: "Instagram",
    icon: instagramIcon,
    href: "https://www.instagram.com/bezglutenowakarola/",
    handle: "@bezglutenowakarola",
  },
  {
    label: "YouTube",
    icon: youTubeIcon,
    href: "https://www.youtube.com/@bezglutenowakarola",
    handle: "@bezglutenowakarola",
  },
  {
    label: "Facebook",
    icon: facebookIcon,
    href: "https://www.facebook.com/profile.php?id=61576336200554",
    handle: "@bezglutenowakarola",
  },
  {
    label: "Mapa",
    icon: mapIcon,
    href: "/bezglutenowe-miejsca",
    handle: "Mapa miejsc",
  },
];

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(
    null,
  );
  const [openHamburger, setOpenHamburger] = useState(false);

  // State for the 10-second shaking label
  const [showInstaLabel, setShowInstaLabel] = useState(true);

  const headerRef = useRef<HTMLDivElement | null>(null);

  const toggleBodyScroll = (isBlocked: boolean) => {
    const action = isBlocked ? "add" : "remove";
    document.body.classList[action]("blocked-body");
    document.documentElement.classList[action]("blocked-body");
  };

  const handleCloseAll = () => {
    setActiveDropdown(null);
    setActiveSubDropdown(null);
    setOpenHamburger(false);
    toggleBodyScroll(false);
  };

  // Timer effect: Hide label after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInstaLabel(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    toggleBodyScroll(openHamburger);
  }, [openHamburger]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        window.innerWidth >= 992 &&
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
        setActiveSubDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="header" ref={headerRef}>
      <div className="header-wrapper">
        <div className="header-wrapper__logo">
          <Link href="/">
            <Image src={logo} alt="Logo" height={90} width={300} />
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div
          className={`hamburger ${openHamburger ? "open" : ""}`}
          onClick={() => setOpenHamburger(!openHamburger)}
        >
          {[...Array(6)].map((_, i) => (
            <span key={i} className="hamburger-line" />
          ))}
        </div>

        <nav className={`header-wrapper__nav ${openHamburger ? "open" : ""}`}>
          <ul className="nav-first-lvl">
            {HEADER_NAV_ITEMS.map((item) => (
              <li
                key={item.label}
                className={item.children ? "nav-expand" : ""}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className={item.className}
                    onClick={handleCloseAll}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === item.label ? null : item.label,
                      )
                    }
                  >
                    {item.label}
                    <Image
                      src={menuDownIcon}
                      alt="arrow"
                      className={`arrow-img ${activeDropdown === item.label ? "rotate" : ""}`}
                    />
                  </span>
                )}

                {item.children && (
                  <ul
                    className={`nav-second-lvl ${item.grid ? "grid-3-col" : ""} ${activeDropdown === item.label ? "active" : ""}`}
                  >
                    {item.children.map((subItem) => (
                      <li
                        key={subItem.label}
                        className={subItem.children ? "nav-sub-expand" : ""}
                      >
                        {subItem.href ? (
                          <Link href={subItem.href} onClick={handleCloseAll}>
                            {subItem.label}
                          </Link>
                        ) : (
                          <>
                            <span
                              onClick={() =>
                                setActiveSubDropdown(
                                  activeSubDropdown === subItem.label
                                    ? null
                                    : subItem.label,
                                )
                              }
                            >
                              {subItem.label}
                              <Image
                                src={menuDownIcon}
                                alt="arrow"
                                className={`arrow-img ${activeSubDropdown === subItem.label ? "rotate" : ""}`}
                              />
                            </span>
                            <ul
                              className={`nav-third-lvl ${activeSubDropdown === subItem.label ? "active" : ""}`}
                            >
                              {subItem.children?.map((deepItem) => (
                                <li key={deepItem.label}>
                                  <Link
                                    href={deepItem.href!}
                                    onClick={handleCloseAll}
                                  >
                                    {deepItem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            {/* Social Links with Instagram Effect */}
            {HEADER_SOCIAL_LINKS.map((social) => (
              <li
                key={social.label}
                className={`header-social-link has-tooltip ${social.label === "Instagram" && showInstaLabel ? "insta-shake" : ""}`}
              >
                <Link
                  href={social.href}
                  target="_blank"
                  onClick={handleCloseAll}
                  style={{ position: "relative" }}
                >
                  <Image
                    src={social.icon}
                    alt={social.label}
                    width={24}
                    height={24}
                    className="social-icon"
                  />
                  <span>{social.handle}</span>

                  {/* Shaking Label for Instagram */}
                  {social.label === "Instagram" && showInstaLabel && (
                    <div className="insta-promo-bubble">
                      Zaobserwuj mnie na Instagramie
                    </div>
                  )}
                </Link>
                <span className="tooltip">{social.label}</span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
