import dynamic from "next/dynamic";
import React from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const MapWithNoSSR = dynamic(() => import("@/components/MapComponent"), {
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
