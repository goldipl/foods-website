import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { HiChevronRight } from "react-icons/hi2";

// Import data and types
import { HERO_SLIDES, HeroSlideItem, SlideLink } from "./../../utils/consts";

// Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SlideText: React.FC<{
  title: string;
  subtitle: string;
  links: SlideLink[];
}> = ({ title, subtitle, links }) => (
  <div className="swiper-slide-box__text">
    <h2 className="slide-title">{title}</h2>
    <h3 className="slide-subtitle">{subtitle}</h3>
    <div className="hero-cta-box">
      {links.map((link, idx) => (
        <Link
          key={`${link.label}-${idx}`}
          href={link.href}
          className={`hero-cta ${link.className || ""}`}
        >
          {link.label} <HiChevronRight />
        </Link>
      ))}
    </div>
  </div>
);

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-wrapper">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {HERO_SLIDES.map((slide, index) => (
            <SwiperSlide key={`hero-slide-${index}`}>
              <div className="slide-content">
                <div
                  className={`swiper-slide-box ${slide.reverse ? "text-right-side" : ""}`}
                >
                  {/* If not reverse: Text then Image. If reverse: Image then Text */}
                  {!slide.reverse ? (
                    <>
                      <SlideText {...slide} />
                      <div className="swiper-slide-box__img">
                        <Image
                          src={slide.image}
                          alt={slide.alt}
                          width={450}
                          height={450}
                          priority={index === 0}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="swiper-slide-box__img">
                        <Image
                          src={slide.image}
                          alt={slide.alt}
                          width={450}
                          height={450}
                        />
                      </div>
                      <SlideText {...slide} />
                    </>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
