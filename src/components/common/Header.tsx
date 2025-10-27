import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "./../../../public/icons/header/bezglutenowakarola-logo.svg";
import menuDownIcon from "./../../../public/icons/common/menu-down-icon.svg";
import instagramIcon from "./../../../public/icons/common/instagram.svg";
import youTubeIcon from "./../../../public/icons/common/youtube.svg";
import facebookIcon from "./../../../public/icons/common/facebook.svg";
import Image from "next/image";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [openHamburger, setOpenHamburger] = useState(false);

  const handleDropdownToggle = (dropdown: any) => {
    const isDropdownActive = activeDropdown === dropdown;
    setActiveDropdown(isDropdownActive ? null : dropdown);
    if (!isDropdownActive) setActiveSubDropdown(null);
  };

  const handleSubDropdownToggle = (dropdown: any) => {
    const isSubDropdownActive = activeSubDropdown === dropdown;
    setActiveSubDropdown(isSubDropdownActive ? null : dropdown);
  };

  const addBlockedWindow = () => {
    document.body.classList.add("blocked-body");
    document.getElementsByTagName("html")[0].classList.add("blocked-body");
  };

  const removeBlockedWindow = () => {
    document.body.classList.remove("blocked-body");
    document.getElementsByTagName("html")[0].classList.remove("blocked-body");
  };

  const handleCloseDropdown = () => {
    setActiveDropdown(null);
    setActiveSubDropdown(null);
    removeBlockedWindow();
    setOpenHamburger(false);
  };

  const handleHamburgerMenu = () => {
    setOpenHamburger((prev) => !prev);
  };

  useEffect(() => {
    if (openHamburger) {
      addBlockedWindow();
    } else {
      removeBlockedWindow();
    }
  }, [openHamburger]);

  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="header-wrapper__logo">
          <Link href="/">
            <Image
              src={logo.src}
              alt="Czytam przed seksem"
              height={90}
              width={300}
            />
          </Link>
        </div>
        <div
          className={`hamburger ${openHamburger ? "open" : ""}`}
          onClick={handleHamburgerMenu}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </div>
        <nav className={`header-wrapper__nav ${openHamburger ? "open" : ""}`}>
          <ul className="nav-first-lvl">
            <li className="nav-expand">
              <span onClick={() => handleDropdownToggle("firstDropdown")}>
                Przepisy
                <Image
                  src={menuDownIcon.src}
                  alt="strzałka"
                  height={9}
                  width={16}
                  className={`arrow-img ${
                    activeDropdown === "firstDropdown" ? "rotate" : ""
                  }`}
                />
              </span>
              <ul
                className={`nav-second-lvl ${
                  activeDropdown === "firstDropdown" ? "active" : ""
                }`}
              >
                <li>
                  <Link href="#sniadania" onClick={handleCloseDropdown}>
                    Śniadania
                  </Link>
                </li>
                <li>
                  <Link href="#obiady" onClick={handleCloseDropdown}>
                    Obiady
                  </Link>
                </li>
                <li>
                  <Link href="#desery" onClick={handleCloseDropdown}>
                    Desery
                  </Link>
                </li>
                <li>
                  <Link href="#przystawki" onClick={handleCloseDropdown}>
                    Przystawki / Przekąski
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-expand">
              <span onClick={() => handleDropdownToggle("secondDropdown")}>
                Restauracje
                <Image
                  src={menuDownIcon.src}
                  alt="strzałka"
                  height={9}
                  width={16}
                  className={`arrow-img ${
                    activeDropdown === "secondDropdown" ? "rotate" : ""
                  }`}
                />
              </span>
              <ul
                className={`nav-second-lvl ${
                  activeDropdown === "secondDropdown" ? "active" : ""
                }`}
              >
                <li className="nav-sub-expand">
                  <span onClick={() => handleSubDropdownToggle("Polska")}>
                    Polska
                    <Image
                      src={menuDownIcon.src}
                      alt="strzałka"
                      height={9}
                      width={16}
                      className={`arrow-img ${
                        activeSubDropdown === "Polska" ? "rotate" : ""
                      }`}
                    />
                  </span>
                  <ul
                    className={`nav-third-lvl ${
                      activeSubDropdown === "Polska" ? "active" : ""
                    }`}
                  >
                    <li>
                      <Link
                        href="#restauracje-polska"
                        onClick={handleCloseDropdown}
                      >
                        Warszawa
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#restauracje-polska"
                        onClick={handleCloseDropdown}
                      >
                        Gdańsk
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#restauracje-polska"
                        onClick={handleCloseDropdown}
                      >
                        Kraków
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#restauracje-polska"
                        onClick={handleCloseDropdown}
                      >
                        Kielce
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#restauracje-polska"
                        onClick={handleCloseDropdown}
                      >
                        Miejsce Piastowe
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-sub-expand">
                  <span onClick={() => handleSubDropdownToggle("Europa")}>
                    Europa
                    <Image
                      src={menuDownIcon.src}
                      alt="strzałka"
                      height={9}
                      width={16}
                      className={`arrow-img ${
                        activeSubDropdown === "Europa" ? "rotate" : ""
                      }`}
                    />
                  </span>
                  <ul
                    className={`nav-third-lvl ${
                      activeSubDropdown === "Europa" ? "active" : ""
                    }`}
                  >
                    <li>
                      <Link
                        href="#restauracje-europa"
                        onClick={handleCloseDropdown}
                      >
                        Włochy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#restauracje-europa"
                        onClick={handleCloseDropdown}
                      >
                        Cypr
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#restauracje-europa"
                        onClick={handleCloseDropdown}
                      >
                        Rumunia
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-expand">
              <span onClick={() => handleDropdownToggle("thirdDropdown")}>
                Produkty
                <Image
                  src={menuDownIcon.src}
                  alt="strzałka"
                  height={9}
                  width={16}
                  className={`arrow-img ${
                    activeDropdown === "thirdDropdown" ? "rotate" : ""
                  }`}
                />
              </span>
              <ul
                className={`nav-second-lvl ${
                  activeDropdown === "thirdDropdown" ? "active" : ""
                }`}
              >
                <li>
                  <Link href="#produkty" onClick={handleCloseDropdown}>
                    Lidl
                  </Link>
                </li>
                <li>
                  <Link href="#produkty" onClick={handleCloseDropdown}>
                    Biedronka
                  </Link>
                </li>
                <li>
                  <Link href="#produkty" onClick={handleCloseDropdown}>
                    Stokrotka
                  </Link>
                </li>
                <li>
                  <Link href="#produkty" onClick={handleCloseDropdown}>
                    Aldi
                  </Link>
                </li>
                <li>
                  <Link href="#produkty" onClick={handleCloseDropdown}>
                    Kaufland
                  </Link>
                </li>
                <li>
                  <Link href="#produkty" onClick={handleCloseDropdown}>
                    Żabka
                  </Link>
                </li>
                <li>
                  <Link href="#produkty" onClick={handleCloseDropdown}>
                    Carrefour
                  </Link>
                </li>
                <li>
                  <Link href="#produkty" onClick={handleCloseDropdown}>
                    Half Price
                  </Link>
                </li>
                <li>
                  <Link href="#produkty" onClick={handleCloseDropdown}>
                    Inne
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-expand">
              <span onClick={() => handleDropdownToggle("fourthDropdown")}>
                Celiakia i co dalej?
                <Image
                  src={menuDownIcon.src}
                  alt="strzałka"
                  height={9}
                  width={16}
                  className={`arrow-img ${
                    activeDropdown === "fourthDropdown" ? "rotate" : ""
                  }`}
                />
              </span>
              <ul
                className={`nav-second-lvl ${
                  activeDropdown === "fourthDropdown" ? "active" : ""
                }`}
              >
                <li>
                  <Link
                    href="#celiakia-podstawowe-informacje"
                    onClick={handleCloseDropdown}
                  >
                    Podstawowe informacje
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pierwsze-kroki-po-diagnozie"
                    onClick={handleCloseDropdown}
                  >
                    Pierwsze kroki po diagnozie
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.youtube.com/watch?v=8TEFTAOyZss"
                    target="_blank"
                    onClick={handleCloseDropdown}
                  >
                    Jak wygląda życie z celiakią? (podcast)
                  </Link>
                </li>
                <li>
                  <Link href="#wydarzenia" onClick={handleCloseDropdown}>
                    Wydarzenia i wiele więcej :)
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="#o-mnie" onClick={handleCloseDropdown}>
                O mnie
              </Link>
            </li>
            <li>
              <Link href="#kontakt" onClick={handleCloseDropdown}>
                Kontakt
              </Link>
            </li>
            <li className="header-social-link">
              <Link
                href="https://www.instagram.com/bezglutenowakarola/"
                onClick={handleCloseDropdown}
                target="_blank"
              >
                <Image
                  className="social-icon"
                  src={instagramIcon.src}
                  alt="instagram"
                  height={24}
                  width={24}
                />
                <span>@bezglutenowakarola</span>
              </Link>
            </li>
            <li className="header-social-link">
              <Link
                href="https://www.youtube.com/@bezglutenowakarola"
                onClick={handleCloseDropdown}
                target="_blank"
              >
                <Image
                  className="social-icon"
                  src={youTubeIcon.src}
                  alt="YouTube"
                  height={28}
                  width={28}
                />
                <span>@bezglutenowakarola</span>
              </Link>
            </li>
            <li className="header-social-link">
              <Link
                href="https://www.facebook.com/profile.php?id=61576336200554"
                onClick={handleCloseDropdown}
                target="_blank"
              >
                <Image
                  className="social-icon"
                  src={facebookIcon.src}
                  alt="Facebook"
                  height={28}
                  width={28}
                />
                <span>@bezglutenowakarola</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
