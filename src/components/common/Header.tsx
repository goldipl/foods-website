import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "@/assets/icons/header/bezglutenowakarola-logo.svg";
import menuDownIcon from "@/assets/icons/common/menu-down-icon.svg";
import instagramIcon from "@/assets/icons/common/instagram.svg";
import Image from "next/image";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [openHamburger, setOpenHamburger] = useState(false);

  const handleDropdownToggle = (dropdown: any) => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
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
                  <Link href="" onClick={handleCloseDropdown}>
                    Śniadania
                  </Link>
                </li>
                <li>
                  <Link href="" onClick={handleCloseDropdown}>
                    Obiady
                  </Link>
                </li>
                <li>
                  <Link href="" onClick={handleCloseDropdown}>
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
                  <Link href="" onClick={handleCloseDropdown}>
                    Polska
                  </Link>
                </li>
                <li>
                  <Link href="" onClick={handleCloseDropdown}>
                    Świat
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="#konsultacje" onClick={handleCloseDropdown}>
                Celiakia - co dalej?
              </Link>
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
            <li>
              <Link
                href="https://www.instagram.com/bezglutenowakarola/"
                onClick={handleCloseDropdown}
                target="_blank"
              >
                <Image
                  className="social-icon"
                  src={instagramIcon.src}
                  alt="instagram"
                  height={40}
                  width={40}
                />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
