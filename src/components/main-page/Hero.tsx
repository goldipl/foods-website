import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Pagination, Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

import welcomeImg from "./../../../public/img/welcome/karola-dynia.jpg";
import breakfastImg from "./../../../public/img/recipes/breakfasts/003_sniadaniowa_tortilla_z_jajkiem.jpg";
import dinnerImg from "./../../../public/img/recipes/dinners/004_bezglutenowy_burger_z_kurczaka_teriyaki.jpg";
import dessertImg from "./../../../public/img/recipes/desserts/004_wege_sernik.jpg";
import pierogi from "./../../../public/img/products/022_bezglutenowe_panettone.jpg";
import pastaGlutenFreeRoma from "./../../../public/img/welcome/wloski-makaron-gluten-free.jpg";
import saskaSushiWarszawa from "./../../../public/img/restaurants/poland/001_saska_sushi.jpg";
import bezglutenoweHalloween from "./../../../public/img/events/011_bezglutenowe_halloween.jpg";
import glutenFreeHeroMap from "./../../../public/img/map/gluten-free-hero-map.jpg";
import Link from "next/link";

SwiperCore.use([Pagination, Navigation]);

const Hero = () => {
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
            delay: 2200,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
            <div className="slide-content">
              <div className="swiper-slide-box">
                <div className="swiper-slide-box__text">
                  <h2>Zdrowo, smacznie, bezglutenowo!</h2>
                </div>
                <div className="swiper-slide-box__img">
                  <Image
                    src={welcomeImg}
                    alt="Restauracja Rola Pao w Warszawie"
                    width={450}
                    height={450}
                  ></Image>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <div className="swiper-slide-box text-right-side">
                <div className="swiper-slide-box__img">
                  <Image
                    src={breakfastImg}
                    alt="Bezglutenowa śniadaniowa tortilla z komosy ryżowej"
                    width={450}
                    height={450}
                  ></Image>
                </div>
                <div className="swiper-slide-box__text">
                  <h2>Bezglutenowe śniadania</h2>
                  <Link className="hero-cta" href="#sniadania">
                    Sprawdź przepisy
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <div className="swiper-slide-box">
                <div className="swiper-slide-box__text">
                  <h2>Bezglutenowe obiady</h2>
                  <Link className="hero-cta" href="#obiady">
                    Sprawdź przepisy
                  </Link>
                </div>
                <div className="swiper-slide-box__img">
                  <Image
                    src={dinnerImg}
                    alt="Kurczako-burger Teriyaki"
                    width={450}
                    height={450}
                  ></Image>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <div className="swiper-slide-box text-right-side">
                <div className="swiper-slide-box__img">
                  <Image
                    src={dessertImg}
                    alt="Wege sernik"
                    width={450}
                    height={450}
                  ></Image>
                </div>
                <div className="swiper-slide-box__text">
                  <h2>Bezglutenowe desery</h2>
                  <Link className="hero-cta" href="#desery">
                    Sprawdź przepisy
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <div className="swiper-slide-box">
                <div className="swiper-slide-box__text">
                  <h2>Bezglutenowe restauracje w Polsce</h2>
                  <Link className="hero-cta" href="#restauracje-polska">
                    Sprawdź
                  </Link>
                </div>
                <div className="swiper-slide-box__img">
                  <Image
                    src={saskaSushiWarszawa}
                    alt="Saska Sushi"
                    width={450}
                    height={450}
                  ></Image>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <div className="swiper-slide-box text-right-side">
                <div className="swiper-slide-box__img">
                  <Image
                    src={pastaGlutenFreeRoma}
                    alt="Restauracja Mama Eat, Włochy"
                    width={450}
                    height={450}
                  ></Image>
                </div>
                <div className="swiper-slide-box__text">
                  <h2>Bezglutenowe restauracje na świecie</h2>
                  <Link className="hero-cta" href="#restauracje-europa">
                    Sprawdź
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <div className="swiper-slide-box">
                <div className="swiper-slide-box__text">
                  <h2>Bezglutenowe produkty - "Czy to ma gluten?"</h2>
                  <Link className="hero-cta" href="#produkty">
                    Sprawdź
                  </Link>
                </div>
                <div className="swiper-slide-box__img">
                  <Image
                    src={pierogi}
                    alt="Czy to ma gluten?"
                    width={450}
                    height={450}
                  ></Image>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <div className="swiper-slide-box">
                <div className="swiper-slide-box__text">
                  <h2>Bezglutenowe wydarzenia</h2>
                  <Link className="hero-cta" href="#wydarzenia">
                    Sprawdź
                  </Link>
                </div>
                <div className="swiper-slide-box__img">
                  <Image
                    src={bezglutenoweHalloween}
                    alt="Bezglutenowe wydarzenia"
                    width={450}
                    height={450}
                  ></Image>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <div className="swiper-slide-box">
                <div className="swiper-slide-box__text">
                  <h2>Mapa miejsc bezglutenowych</h2>
                  <Link className="hero-cta" href="/bezglutenowe-miejsca">
                    Sprawdź
                  </Link>
                </div>
                <div className="swiper-slide-box__img">
                  <Image
                    src={glutenFreeHeroMap}
                    alt="Mapa miejsc bezglutenowych"
                    width={450}
                    height={450}
                  ></Image>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
