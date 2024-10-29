import React from "react";
import "@/css/swiper-bundle.min.css";
import "@/sass/main.scss";
import Topbar from "@/components/common/Topbar";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Hero from "@/components/main-page/Hero";
import WelcomeSection from "@/components/main-page/WelcomeSection";
import BoxesInfoSection from "@/components/main-page/BoxesInfoSection";

const index = () => {
  return (
    <>
      <header>
        <Topbar />
        <Header />
      </header>
      <main>
        <Hero />
        <WelcomeSection />
        <BoxesInfoSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default index;
