import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "./../../../public/icons/header/bezglutenowakarola-logo.svg";
import menuDownIcon from "./../../../public/icons/common/menu-down-icon.svg";
import instagramIcon from "./../../../public/icons/common/instagram.svg";
import Image from "next/image";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [openHamburger, setOpenHamburger] = useState(false);

  const handleDropdownToggle = (dropdown: any) => {
    const isDropdownActive = activeDropdown === dropdown;
    setActiveDropdown(isDropdownActive ? null : dropdown);
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
                <li>
                  <Link
                    href="#restauracje-polska"
                    onClick={handleCloseDropdown}
                  >
                    Polska
                  </Link>
                </li>
                <li>
                  <Link
                    href="#restauracje-europa"
                    onClick={handleCloseDropdown}
                  >
                    Europa
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-expand">
              <span onClick={() => handleDropdownToggle("thirdDropdown")}>
                Czy to ma gluten?
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
                  <Link href="#celiakia-co-dalej" onClick={handleCloseDropdown}>
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
                  height={32}
                  width={32}
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
