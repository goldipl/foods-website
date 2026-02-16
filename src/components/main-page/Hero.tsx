import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { HiChevronRight } from "react-icons/hi2";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import welcomeImg from "./../../../public/img/welcome/karola-dynia.jpg";
import breakfastImg from "./../../../public/img/recipes/breakfasts/003_sniadaniowa_tortilla_z_jajkiem.jpg";
import dinnerImg from "./../../../public/img/recipes/dinners/004_bezglutenowy_burger_z_kurczaka_teriyaki.jpg";
import dessertImg from "./../../../public/img/recipes/desserts/004_wege_sernik.jpg";
import pierogi from "./../../../public/img/products/022_bezglutenowe_panettone.jpg";
import pastaGlutenFreeRoma from "./../../../public/img/welcome/wloski-makaron-gluten-free.jpg";
import saskaSushiWarszawa from "./../../../public/img/restaurants/poland/001_saska_sushi.jpg";
import bezglutenoweHalloween from "./../../../public/img/events/011_bezglutenowe_halloween.jpg";
import glutenFreeHeroMap from "./../../../public/img/map/gluten-free-hero-map.jpg";

interface SlideLink {
  label: string;
  href: string;
  className?: string;
}

interface SlideItem {
  title: string;
  subtitle: string;
  image: StaticImageData;
  alt: string;
  links: SlideLink[];
  reverse?: boolean;
}

const SLIDES_DATA: SlideItem[] = [
  {
    title: "Zdrowo, smacznie, bezglutenowo!",
    subtitle: "Przepisy, restauracje i porady dla osób na diecie bezglutenowej",
    image: welcomeImg,
    alt: "Restauracja Rola Pao w Warszawie",
    links: [
      { label: "Przepisy", href: "#sniadania" },
      {
        label: "Poradniki",
        href: "#celiakia-podstawowe-informacje",
        className: "white",
      },
    ],
  },
  {
    title: "Mapa miejsc bezglutenowych",
    subtitle:
      "Restauracje, kawiarnie, cukiernie bez glutenu w Polsce i na świecie sprawdzone osobiście przeze mnie",
    image: glutenFreeHeroMap,
    alt: "Mapa miejsc bezglutenowych",
    links: [{ label: "Sprawdź", href: "/bezglutenowe-miejsca" }],
  },
  {
    title: "Bezglutenowe śniadania",
    subtitle:
      "Szukasz pomysłów na śniadania bezglutenowe, które są nie tylko zdrowe, ale i pyszne?",
    image: breakfastImg,
    alt: "Bezglutenowa śniadaniowa tortilla z komosy ryżowej",
    reverse: true,
    links: [{ label: "Sprawdź przepisy", href: "#sniadania" }],
  },
  {
    title: "Bezglutenowe obiady",
    subtitle:
      "Szukasz inspiracji na obiady bezglutenowe, które będą nie tylko zdrowe, ale też pyszne?",
    image: dinnerImg,
    alt: "Kurczako-burger Teriyaki",
    links: [{ label: "Sprawdź przepisy", href: "#obiady" }],
  },
  {
    title: "Bezglutenowe desery",
    subtitle:
      "Marzysz o pysznych deserach bezglutenowych, które zachwycą smakiem?",
    image: dessertImg,
    alt: "Wege sernik",
    reverse: true,
    links: [{ label: "Sprawdź przepisy", href: "#desery" }],
  },
  {
    title: "Bezglutenowe restauracje w Polsce",
    subtitle:
      "Szukasz miejsc, gdzie możesz zjeść pysznie i bez glutenu w Polsce?",
    image: saskaSushiWarszawa,
    alt: "Saska Sushi",
    links: [{ label: "Sprawdź", href: "#restauracje-polska" }],
  },
  {
    title: "Bezglutenowe restauracje na świecie",
    subtitle:
      "Szukasz miejsc, gdzie możesz zjeść pysznie i bez glutenu na świecie?",
    image: pastaGlutenFreeRoma,
    alt: "Restauracja Mama Eat, Włochy",
    reverse: true,
    links: [{ label: "Sprawdź", href: "#restauracje-europa" }],
  },
  {
    title: 'Bezglutenowe produkty - "Czy to ma gluten?"',
    subtitle:
      "Sprawdzone produkty bezglutenowe, które warto mieć w swojej kuchni",
    image: pierogi,
    alt: "Czy to ma gluten?",
    links: [{ label: "Sprawdź", href: "#produkty" }],
  },
  {
    title: "Bezglutenowe wydarzenia",
    subtitle:
      "Bezglutenowe eventy, warsztaty i spotkania dla osób na diecie bezglutenowej",
    image: bezglutenoweHalloween,
    alt: "Bezglutenowe wydarzenia",
    links: [{ label: "Sprawdź", href: "#wydarzenia" }],
  },
];

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

const SlideImage: React.FC<{
  src: StaticImageData;
  alt: string;
  priority?: boolean;
}> = ({ src, alt, priority }) => (
  <div className="swiper-slide-box__img">
    <Image src={src} alt={alt} width={450} height={450} priority={priority} />
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
          loop={true}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {SLIDES_DATA.map((slide, index) => (
            <SwiperSlide key={`hero-slide-${index}`}>
              <div className="slide-content">
                <div
                  className={`swiper-slide-box ${slide.reverse ? "text-right-side" : ""}`}
                >
                  {/* Clean logic: Reverse slides swap the DOM order of Text/Image */}
                  {!slide.reverse ? (
                    <>
                      <SlideText {...slide} />
                      <SlideImage
                        src={slide.image}
                        alt={slide.alt}
                        priority={index === 0}
                      />
                    </>
                  ) : (
                    <>
                      <SlideImage src={slide.image} alt={slide.alt} />
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
