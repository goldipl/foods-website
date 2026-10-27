import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade, A11y } from "swiper/modules";
import {
  HiArrowRight,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi2";

// Import data and types
import { HERO_SLIDES, HeroSlideItem } from "./../../utils/consts";

// Styles
import "swiper/css";
import "swiper/css/effect-fade";

const AUTOPLAY_DELAY = 5500;

const formatIndex = (value: number) => String(value).padStart(2, "0");

const HeroSlide: React.FC<{ slide: HeroSlideItem; index: number }> = ({
  slide,
  index,
}) => {
  // Only the first slide carries the page heading
  const Heading = index === 0 ? "h1" : "h2";

  return (
    <div className="hero-slide">
      <div className="hero-slide__content">
        <Heading className="hero-slide__title">{slide.title}</Heading>
        <p className="hero-slide__subtitle">{slide.subtitle}</p>
        <div className="hero-slide__actions">
          {slide.links.map((link, idx) => (
            <Link
              key={`${link.label}-${idx}`}
              href={link.href}
              className={`hero-slide__cta ${link.className || ""}`}
            >
              {link.label} <HiArrowRight aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
      <div className="hero-slide__media">
        <Image
          src={slide.image}
          alt={slide.alt}
          fill
          sizes="(max-width: 992px) 100vw, 560px"
          priority={index === 0}
        />
      </div>
    </div>
  );
};

const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const progressRef = useRef<HTMLSpanElement>(null);

  return (
    <section id="hero" className="hero" aria-label="Polecane na stronie">
      <span className="hero__orb hero__orb--one" aria-hidden="true" />
      <span className="hero__orb hero__orb--two" aria-hidden="true" />
      <div className="hero-wrapper">
        <div className="hero-stage">
          <Swiper
            slidesPerView={1}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={700}
            loop
            navigation={{
              prevEl: ".hero-controls__btn--prev",
              nextEl: ".hero-controls__btn--next",
            }}
            autoplay={{
              delay: AUTOPLAY_DELAY,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            onAutoplayTimeLeft={(_, __, progress) => {
              progressRef.current?.style.setProperty(
                "--hero-progress",
                String(1 - progress),
              );
            }}
            modules={[Autoplay, Navigation, EffectFade, A11y]}
          >
            {HERO_SLIDES.map((slide, index) => (
              <SwiperSlide key={`hero-slide-${index}`}>
                <HeroSlide slide={slide} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Static decorations aligned with the slide image frame */}
          <div className="hero-stage__decor" aria-hidden="true">
            <div className="hero-stage__frame">
              <span className="hero-stage__food hero-stage__food--bread">
                🍞
              </span>
              <span className="hero-stage__food hero-stage__food--avocado">
                🥑
              </span>
              <span className="hero-stage__chip">💚 Bez glutenu</span>
            </div>
          </div>
        </div>
        <div className="hero-controls">
          <button
            type="button"
            className="hero-controls__btn hero-controls__btn--prev"
            aria-label="Poprzedni slajd"
          >
            <HiChevronLeft aria-hidden="true" />
          </button>
          <span className="hero-controls__counter">
            <strong>{formatIndex(activeIndex + 1)}</strong>
            <span aria-hidden="true">/</span>
            {formatIndex(HERO_SLIDES.length)}
          </span>
          <span className="hero-controls__progress" aria-hidden="true">
            <span ref={progressRef} />
          </span>
          <button
            type="button"
            className="hero-controls__btn hero-controls__btn--next"
            aria-label="Następny slajd"
          >
            <HiChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
