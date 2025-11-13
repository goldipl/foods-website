import dynamic from "next/dynamic";
import React from "react";
import "@/sass/main.scss";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const MapWithNoSSR = dynamic(() => import("@/components/map/MapComponent"), {
  ssr: false,
});

export default function GlutenFreePlaces() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <MapWithNoSSR />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
