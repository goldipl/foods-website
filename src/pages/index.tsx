import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import React from "react";
import "@/sass/main.scss";
import Hero from "@/components/main-page/Hero";

const index = () => {
  return (
    <>
      <header>
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
