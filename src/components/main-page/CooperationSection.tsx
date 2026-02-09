import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { PARTNERS } from "@/utils/consts";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
