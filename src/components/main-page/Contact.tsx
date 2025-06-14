import Link from "next/link";
import React from "react";
import { MdAlternateEmail } from "react-icons/md";
import { PiInstagramLogo } from "react-icons/pi";
import { AiOutlineYoutube } from "react-icons/ai";
import { LiaFacebook } from "react-icons/lia";

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
              <MdAlternateEmail />
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
              <PiInstagramLogo />
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
              <AiOutlineYoutube />
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
          <div className="contact-box-slot">
            <div className="contact-box-slot__icon instagram">
              <LiaFacebook />
            </div>
            <div className="contact-box-slot__content">
              <Link
                href="https://www.facebook.com/profile.php?id=61576336200554"
                target="_blank"
              >
                @bezglutenowakarola{" "}
                <span>- Polub i obserwuj mnie na Facebooku</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
