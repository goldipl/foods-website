import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Pagination, Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

import Glutenex from "./../../../public/img/cooperation/glutenex.png";
import Incola from "./../../../public/img/cooperation/incola.jpg";
import Bezgluten from "./../../../public/img/cooperation/bezgluten.png";

SwiperCore.use([Pagination, Navigation]);

const CooperationSection = () => {
  return (
    <section id="wspolpraca" className="cooperation-section cooperation-title">
      <div className="cooperation-wrapper">
        <div className="section-title">
          <h2>Współpraca</h2>
        </div>
        <div className="swiper-wrapper">
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
                <Link
                  className="cooperation-link"
                  href="https://glutenex.pl/"
                  target="_blank"
                >
                  <Image
                    src={Glutenex}
                    alt="Glutenex"
                    width={260}
                    height={122}
                  ></Image>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-content">
                <Link
                  className="cooperation-link"
                  href="https://bezgluten.pl/"
                  target="_blank"
                >
                  <Image
                    src={Bezgluten}
                    alt="Bezgluten"
                    width={260}
                    height={122}
                  ></Image>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-content">
                <Link
                  className="cooperation-link"
                  href="https://www.incola.com.pl/"
                  target="_blank"
                >
                  <Image
                    src={Incola}
                    alt="Incola"
                    width={260}
                    height={122}
                  ></Image>
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CooperationSection;
