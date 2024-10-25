import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import React from "react";
import "@/sass/main.scss";
import Hero from "@/components/main-page/Hero";
import Topbar from "@/components/common/Topbar";

const index = () => {
  return (
    <>
      <header>
        <Topbar />
        <Header />
      </header>
      <main>
        <Hero />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default index;
