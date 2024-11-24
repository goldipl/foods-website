import Link from "next/link";
import React from "react";
import { SlEnvolopeLetter } from "react-icons/sl";
import { CiInstagram } from "react-icons/ci";

const Contact = () => {
  return (
    <div id="kontakt" className="contact-section">
      <div className="contact-wrapper">
        <h2>Kontakt</h2>
        <div className="contact-box">
          <div className="contact-box-slot">
            <div className="contact-box-slot__icon">
              <SlEnvolopeLetter />
            </div>
            <div className="contact-box-slot__content">
              <Link href="mailto:karolinawontorska@gmail.com">
                karolinawontorska@gmail.com <span>- Masz pytania? Napisz</span>
              </Link>
            </div>
          </div>
          <div className="contact-box-slot">
            <div className="contact-box-slot__icon instagram">
              <CiInstagram />
            </div>
            <div className="contact-box-slot__content">
              <Link href="https://www.instagram.com/bezglutenowakarola/">
                @bezglutenowakarola <span>- Obserwuj po więcej</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
