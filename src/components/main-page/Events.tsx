import Link from "next/link";
import React from "react";
import { CiInstagram } from "react-icons/ci";
import Image from "next/image";
import { eventsData } from "@/data/events/events";

const Events = () => {
  return (
    <section id="wydarzenia" className="events-section events-title">
      <div className="events-wrapper">
        <div className="section-title">
          <h2>Wydarzenia i wiele więcej :)</h2>
        </div>
        <div className="listing-v1">
          {eventsData
            .slice()
            .reverse()
            .slice(0, 4)
            .map((event) => (
              <Link
                key={event.id}
                href={event.href}
                className="listing-v1-slot"
                target="_blank"
              >
                <div className="listing-v1-slot__img">
                  <Image
                    src={event.imgSrc}
                    alt={event.altText}
                    width={400}
                    height={500}
                    loading="lazy"
                  />
                </div>
                <div className="listing-v1-slot__text">
                  <span>{event.description}</span>
                </div>
                <div className="listing-v1-slot__labels">
                  <span className={event.labelClass}>{event.label}</span>
                </div>
                <div className="listing-v1-slot__zoom">
                  <div className="zoom-box">
                    <CiInstagram />
                    <span>Zobacz</span>
                  </div>
                </div>
              </Link>
            ))}
        </div>

        <div className="primary-button">
          <Link href="/wydarzenia/" className="primary-button__text">
            Więcej z sekcji Wydarzenia
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Events;
