import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowUpRight, HiOutlineEnvelope } from "react-icons/hi2";
import { PiHandshake } from "react-icons/pi";
import { PARTNERS } from "@/utils/consts";
import SectionHeader from "@/components/common/SectionHeader";

const CooperationSection = () => {
  return (
    <section id="wspolpraca" className="cooperation-section home-section">
      <div className="cooperation-wrapper home-section__wrapper">
        <SectionHeader
          id="cooperation-title"
          eyebrow={
            <>
              <PiHandshake aria-hidden="true" />
              Partnerzy
            </>
          }
          title="Marki, z którymi współpracuję"
          description="Poznaj bezglutenowych producentów, z którymi miałam przyjemność działać. Kliknij w logo, aby dowiedzieć się więcej."
        />

        <ul className="cooperation-grid">
          {PARTNERS.map((partner) => (
            <li key={partner.name}>
              <Link
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="partner-card"
              >
                <span className="partner-card__logo">
                  <Image
                    src={partner.src}
                    alt={`${partner.name} logo`}
                    sizes="(max-width: 560px) 45vw, 260px"
                  />
                </span>
                <span className="partner-card__footer">
                  <span className="partner-card__name">{partner.name}</span>
                  <span className="partner-card__arrow" aria-hidden="true">
                    <HiArrowUpRight />
                  </span>
                </span>
              </Link>
            </li>
          ))}

          <li className="cooperation-grid__cta">
            <Link
              href="mailto:karolinawontorska@gmail.com"
              className="partner-invite"
            >
              <span className="partner-invite__icon" aria-hidden="true">
                <PiHandshake />
              </span>
              <strong>Twoja marka w tym gronie?</strong>
              <span className="partner-invite__text">
                Chętnie poznam produkty i miejsca przyjazne osobom z celiakią.
              </span>
              <span className="partner-invite__button">
                <HiOutlineEnvelope aria-hidden="true" /> Napisz do mnie
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CooperationSection;
