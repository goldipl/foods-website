import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Pagination, Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

import avocadoImg from "./../../../public/img/hero/avocado.png";
import lemonsImg from "./../../../public/img/hero/lemons.png";
import bananasImg from "./../../../public/img/hero/bananas.png";
import orangesImg from "./../../../public/img/hero/oranges.png";
import Link from "next/link";

SwiperCore.use([Pagination, Navigation]);

const Hero = () => {
  return (
    <div id="hero" className="hero">
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
                  <Link className="hero-cta" href="">
                    Sprawdź moje przepisy
                  </Link>
                </div>
                <div className="swiper-slide-box__img">
                  <Image
                    src={avocadoImg}
                    alt="awokado"
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
                    src={lemonsImg}
                    alt="cytryny"
                    width={450}
                    height={450}
                  ></Image>
                </div>
                <div className="swiper-slide-box__text">
                  <h2>Bezglutenowe śniadania</h2>
                  <Link className="hero-cta" href="">
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
                  <Link className="hero-cta" href="">
                    Sprawdź przepisy
                  </Link>
                </div>
                <div className="swiper-slide-box__img">
                  <Image
                    src={bananasImg}
                    alt="banany"
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
                    src={orangesImg}
                    alt="pomarancze"
                    width={450}
                    height={450}
                  ></Image>
                </div>
                <div className="swiper-slide-box__text">
                  <h2>Bezglutenowe desery</h2>
                  <Link className="hero-cta" href="">
                    Sprawdź przepisy
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
