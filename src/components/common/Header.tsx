"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { HiChevronDown, HiChevronRight } from "react-icons/hi2";

import {
  HEADER_NAV_ITEMS,
  HEADER_SOCIAL_LINKS,
  HEADER_ICONS,
} from "./../../utils/consts";

const MOBILE_BREAKPOINT = 1180;
const FIXED_SCROLL_OFFSET = 300;
const INSTA_BUBBLE_DURATION = 10000;

const toDropdownId = (label: string) =>
  `menu-${label
    .toLowerCase()
    .normalize("NFD")
    .replace(/[^a-z0-9]+/g, "-")}`;

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showInstaBubble, setShowInstaBubble] = useState(false);

  const headerRef = useRef<HTMLDivElement | null>(null);
  const backdropRef = useRef<HTMLDivElement | null>(null);

  const instagramLink = HEADER_SOCIAL_LINKS.find(
    (social) => social.label === "Instagram",
  );
  const iconLinks = HEADER_SOCIAL_LINKS.filter(
    (social) => social !== instagramLink,
  );

  // --- Body scroll lock while the mobile menu is open ---
  useEffect(() => {
    const syncScrollLock = () => {
      const shouldBlock = openMenu && window.innerWidth <= MOBILE_BREAKPOINT;
      document.body.classList.toggle("blocked-body", shouldBlock);
      document.documentElement.classList.toggle("blocked-body", shouldBlock);
    };

    syncScrollLock();
    window.addEventListener("resize", syncScrollLock);
    return () => {
      window.removeEventListener("resize", syncScrollLock);
      document.body.classList.remove("blocked-body");
      document.documentElement.classList.remove("blocked-body");
    };
  }, [openMenu]);

  // Instagram promo bubble: on load on desktop, when the menu opens on mobile
  useEffect(() => {
    const isMobile = window.innerWidth <= MOBILE_BREAKPOINT;
    if (!isMobile || openMenu) setShowInstaBubble(true);
  }, [openMenu]);

  useEffect(() => {
    if (!showInstaBubble) return;
    const timer = setTimeout(
      () => setShowInstaBubble(false),
      INSTA_BUBBLE_DURATION,
    );
    return () => clearTimeout(timer);
  }, [showInstaBubble]);

  useEffect(() => {
    const handleScroll = () =>
      setIsScrolled(window.scrollY > FIXED_SCROLL_OFFSET);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns on outside click and everything on Escape.
  // The backdrop closes on its own `click`, so the click never falls
  // through to the page content underneath it.
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        window.innerWidth > MOBILE_BREAKPOINT &&
        headerRef.current &&
        !headerRef.current.contains(target) &&
        !backdropRef.current?.contains(target)
      ) {
        setActiveDropdown(null);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveDropdown(null);
        setOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleCloseAll = () => {
    setActiveDropdown(null);
    setOpenMenu(false);
  };

  // Clicking a trigger toggles its panel and closes any other open one
  const handleTriggerClick = (label: string) => {
    setActiveDropdown((current) => (current === label ? null : label));
  };

  return (
    <div className="header-slot">
      <div
        className={`site-header ${isScrolled ? "is-fixed" : ""} ${openMenu ? "menu-open" : ""}`}
        ref={headerRef}
      >
        <div className="site-header__inner">
          <Link href="/" className="site-header__logo" onClick={handleCloseAll}>
            <Image
              src={HEADER_ICONS.logo}
              alt="Bezglutenowa Karola - strona główna"
              height={112}
              width={372}
              priority
            />
          </Link>

          <nav
            id="main-menu"
            className={`site-header__nav ${openMenu ? "open" : ""}`}
            aria-label="Menu główne"
          >
            <ul className="site-header__menu">
              {HEADER_NAV_ITEMS.map((item) => {
                const isOpen = activeDropdown === item.label;
                const dropdownId = toDropdownId(item.label);
                const hasMega = Boolean(item.groups?.length);

                return (
                  <li
                    key={item.label}
                    className={`site-header__item ${isOpen ? "is-open" : ""}`}
                  >
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="site-header__link"
                        onClick={handleCloseAll}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <button
                        type="button"
                        className="site-header__link site-header__trigger"
                        aria-expanded={isOpen}
                        aria-controls={dropdownId}
                        onClick={() => handleTriggerClick(item.label)}
                      >
                        {item.label}
                        <HiChevronDown aria-hidden="true" />
                      </button>
                    )}

                    {hasMega && (
                      <div
                        id={dropdownId}
                        className={`site-header__mega ${item.featured?.length ? "" : "site-header__mega--compact"}`}
                      >
                        <div className="site-header__mega-inner">
                          {item.featured && item.featured.length > 0 && (
                            <div className="site-header__mega-featured">
                              {item.featured.map((feature) => (
                                <Link
                                  key={feature.label}
                                  href={feature.href}
                                  className="site-header__mega-card"
                                  onClick={handleCloseAll}
                                >
                                  <span
                                    className="site-header__mega-frame"
                                    aria-hidden="true"
                                  >
                                    <span className="site-header__mega-window">
                                      <span className="site-header__mega-bar">
                                        <i />
                                        <i />
                                        <i />
                                      </span>
                                      <Image
                                        src={feature.image}
                                        alt={feature.alt}
                                        sizes="220px"
                                        className="site-header__mega-img"
                                      />
                                    </span>
                                  </span>
                                  <span className="site-header__mega-card-body">
                                    <span className="site-header__mega-card-title">
                                      {feature.label}
                                    </span>
                                    <span className="site-header__mega-card-desc">
                                      {feature.description}
                                    </span>
                                  </span>
                                </Link>
                              ))}
                            </div>
                          )}

                          <div className="site-header__mega-main">
                            <div className="site-header__mega-groups">
                              {item.groups?.map((group) => (
                                <div
                                  key={group.title}
                                  className="site-header__mega-group"
                                >
                                  <p className="site-header__mega-group-title">
                                    {group.title}
                                  </p>
                                  <ul>
                                    {group.links.map((link) => {
                                      const Icon = link.icon;

                                      return (
                                        <li key={link.label}>
                                          <Link
                                            href={link.href}
                                            className={`site-header__mega-link ${link.className ?? ""}`}
                                            onClick={handleCloseAll}
                                          >
                                            {Icon && (
                                              <span
                                                className="site-header__mega-icon"
                                                aria-hidden="true"
                                              >
                                                <Icon />
                                              </span>
                                            )}
                                            <span className="site-header__mega-text">
                                              <span className="site-header__mega-label">
                                                {link.label}
                                              </span>
                                              {link.description && (
                                                <span className="site-header__mega-desc">
                                                  {link.description}
                                                </span>
                                              )}
                                            </span>
                                          </Link>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                              ))}
                            </div>

                            {item.footerLink && (
                              <Link
                                href={item.footerLink.href}
                                className="site-header__mega-footer"
                                onClick={handleCloseAll}
                              >
                                {item.footerLink.label}
                                <HiChevronRight aria-hidden="true" />
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="site-header__actions">
              {instagramLink && (
                <Link
                  href={instagramLink.href}
                  target={instagramLink.target}
                  rel="noopener noreferrer"
                  className={`site-header__icon site-header__icon--instagram ${showInstaBubble ? "has-bubble" : ""}`}
                  data-tooltip={instagramLink.label}
                  onClick={handleCloseAll}
                >
                  <instagramLink.icon aria-hidden="true" />
                  <span className="site-header__icon-label">
                    {instagramLink.handle}
                  </span>
                  {showInstaBubble && !activeDropdown && (
                    <span
                      className="site-header__insta-bubble"
                      aria-hidden="true"
                    >
                      Zaobserwuj mnie na Instagramie
                    </span>
                  )}
                </Link>
              )}
              {iconLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target={social.target}
                    rel={
                      social.target === "_blank"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={`site-header__icon site-header__icon--${social.theme}`}
                    data-tooltip={social.label}
                    onClick={handleCloseAll}
                  >
                    <Icon aria-hidden="true" />
                    <span className="site-header__icon-label">
                      {social.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>

          <button
            type="button"
            className={`site-header__burger ${openMenu ? "open" : ""}`}
            aria-expanded={openMenu}
            aria-controls="main-menu"
            aria-label={openMenu ? "Zamknij menu" : "Otwórz menu"}
            onClick={() => setOpenMenu((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Desktop only: dims and blurs the page under an open mega menu */}
      <div
        ref={backdropRef}
        className={`site-header-backdrop ${activeDropdown ? "is-visible" : ""}`}
        aria-hidden="true"
        onClick={() => setActiveDropdown(null)}
      />
    </div>
  );
};

export default Header;
