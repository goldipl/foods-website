import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Glutenex from "@/public/img/cooperation/glutenex.png";
import Incola from "@/public/img/cooperation/incola.jpg";
import Bezgluten from "@/public/img/cooperation/bezgluten.png";
import Balviten from "@/public/img/cooperation/balviten.jpg";
import Vallongo from "@/public/img/cooperation/vallongo.jpg";
import Moncana from "@/public/img/cooperation/moncana.png";

const PARTNERS = [
  { name: "Glutenex", href: "https://glutenex.pl/", src: Glutenex },
  { name: "Bezgluten", href: "https://bezgluten.pl/", src: Bezgluten },
  { name: "Incola", href: "https://www.incola.com.pl/", src: Incola },
  { name: "Balviten", href: "https://balviten.com/", src: Balviten },
  { name: "Vallongo", href: "https://vallongo.it/pl-pl", src: Vallongo },
  { name: "Moncana", href: "https://moncana.pl/", src: Moncana },
];

const CooperationSection = () => {
  return (
    <section id="wspolpraca" className="cooperation-section">
      <div className="cooperation-wrapper">
        <header className="section-title">
          <h2>Współpraca</h2>
        </header>

        <div className="swiper-container">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
              delay: 2200,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {PARTNERS.map((partner) => (
              <SwiperSlide key={partner.name}>
                <div className="slide-content">
                  <Link
                    href={partner.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cooperation-link"
                  >
                    <Image
                      src={partner.src}
                      alt={`${partner.name} logo`}
                      width={260}
                      height={122}
                      style={{ objectFit: "contain" }}
                    />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CooperationSection;
