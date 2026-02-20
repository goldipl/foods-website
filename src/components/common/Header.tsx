"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import {
  HEADER_NAV_ITEMS,
  HEADER_SOCIAL_LINKS,
  HEADER_ICONS,
} from "./../../utils/consts";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(
    null,
  );
  const [openHamburger, setOpenHamburger] = useState(false);

  // State for the shaking label - initially false
  const [showInstaLabel, setShowInstaLabel] = useState(false);

  const headerRef = useRef<HTMLDivElement | null>(null);

  const toggleBodyScroll = (isBlocked: boolean) => {
    if (typeof document === "undefined") return;
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

  // Logic to trigger Instagram animation
  useEffect(() => {
    const isMobile = window.innerWidth <= 1180;

    if (isMobile) {
      // On mobile, trigger only when hamburger is opened
      if (openHamburger) {
        setShowInstaLabel(true);
      }
    } else {
      // On desktop, trigger immediately on mount
      setShowInstaLabel(true);
    }
  }, [openHamburger]);

  // Timer effect: Hide label after 15 seconds once it becomes visible
  useEffect(() => {
    if (showInstaLabel) {
      const timer = setTimeout(() => {
        setShowInstaLabel(false);
      }, 15000);
      return () => clearTimeout(timer);
    }
  }, [showInstaLabel]);

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
            <Image
              src={HEADER_ICONS.logo}
              alt="Logo"
              height={90}
              width={300}
              priority
            />
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
                      src={HEADER_ICONS.menuDownIcon}
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
                                src={HEADER_ICONS.menuDownIcon}
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
            {HEADER_SOCIAL_LINKS.map((social) => {
              const isInstagram = social.label === "Instagram";
              const shouldAnimate = isInstagram && showInstaLabel;

              return (
                <li
                  key={social.label}
                  className={`header-social-link has-tooltip ${shouldAnimate ? "insta-shake" : ""}`}
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
                    {shouldAnimate && (
                      <div className="insta-promo-bubble">
                        Zaobserwuj mnie na Instagramie
                      </div>
                    )}
                  </Link>
                  <span className="tooltip">{social.label}</span>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
