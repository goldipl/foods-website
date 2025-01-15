import Link from "next/link";
import React from "react";
import { SlEnvolopeLetter } from "react-icons/sl";
import { CiInstagram } from "react-icons/ci";
import { PiYoutubeLogoThin } from "react-icons/pi";

const Contact = () => {
  return (
    <section id="kontakt" className="contact-section contact-title">
      <div className="contact-wrapper">
        <div className="section-title">
          <h2>Kontakt</h2>
        </div>
        <div className="contact-box">
          <div className="contact-box-slot">
            <div className="contact-box-slot__icon">
              <SlEnvolopeLetter />
            </div>
            <div className="contact-box-slot__content">
              <Link href="mailto:karolinawontorska@gmail.com">
                karolinawontorska@gmail.com{" "}
                <span>- Masz pytania? Współpraca? Pisz śmiało</span>
              </Link>
            </div>
          </div>
          <div className="contact-box-slot">
            <div className="contact-box-slot__icon instagram">
              <CiInstagram />
            </div>
            <div className="contact-box-slot__content">
              <Link
                href="https://www.instagram.com/bezglutenowakarola/"
                target="_blank"
              >
                @bezglutenowakarola <span>- Obserwuj po więcej</span>
              </Link>
            </div>
          </div>
          <div className="contact-box-slot">
            <div className="contact-box-slot__icon instagram">
              <PiYoutubeLogoThin />
            </div>
            <div className="contact-box-slot__content">
              <Link
                href="https://www.youtube.com/@bezglutenowakarola"
                target="_blank"
              >
                @bezglutenowakarola <span>- Subskrybuj i bądź na bieżąco</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
