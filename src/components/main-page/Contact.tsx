import Link from "next/link";
import React from "react";
import { MdAlternateEmail } from "react-icons/md";
import { PiInstagramLogo } from "react-icons/pi";
import { AiOutlineYoutube } from "react-icons/ai";
import { LiaFacebook } from "react-icons/lia";
import { HiArrowUpRight } from "react-icons/hi2";
import SectionHeader from "@/components/common/SectionHeader";

const CONTACT_CHANNELS = [
  {
    icon: MdAlternateEmail,
    theme: "mail",
    label: "karolinawontorska@gmail.com",
    description: "Masz pytania? Współpraca? Pisz śmiało",
    href: "mailto:karolinawontorska@gmail.com",
  },
  {
    icon: PiInstagramLogo,
    theme: "instagram",
    label: "@bezglutenowakarola",
    description: "Obserwuj po więcej",
    href: "https://www.instagram.com/bezglutenowakarola/",
  },
  {
    icon: AiOutlineYoutube,
    theme: "youtube",
    label: "@bezglutenowakarola",
    description: "Subskrybuj i bądź na bieżąco",
    href: "https://www.youtube.com/@bezglutenowakarola",
  },
  {
    icon: LiaFacebook,
    theme: "facebook",
    label: "@bezglutenowakarola",
    description: "Polub i obserwuj mnie na Facebooku",
    href: "https://www.facebook.com/profile.php?id=61576336200554",
  },
];

const Contact = () => {
  return (
    <section id="kontakt" className="contact-section home-section">
      <div className="contact-wrapper home-section__wrapper">
        <SectionHeader
          eyebrow="Bądźmy w kontakcie"
          title="Kontakt"
          align="center"
        />
        <div className="contact-box">
          {CONTACT_CHANNELS.map((channel) => {
            const Icon = channel.icon;
            const isExternal = channel.href.startsWith("http");

            return (
              <Link
                key={channel.href}
                href={channel.href}
                target={isExternal ? "_blank" : undefined}
                className={`contact-box-slot contact-box-slot--${channel.theme}`}
              >
                <span className="contact-box-slot__icon" aria-hidden="true">
                  <Icon />
                </span>
                <span className="contact-box-slot__content">
                  <strong>{channel.label}</strong>
                  <span>{channel.description}</span>
                </span>
                <HiArrowUpRight
                  className="contact-box-slot__arrow"
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
