import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
import "@/sass/main.scss";
import Topbar from "@/components/common/Topbar";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const MapWithNoSSR = dynamic(() => import("@/components/map/MapComponent"), {
  ssr: false,
});

export default function GlutenFreePlaces() {
  return (
    <>
      <Head>
        <title>
          Bezglutenowe Miejsca - Interaktywna mapa | Bezglutenowa Karola
        </title>
        <meta
          name="description"
          content="Interaktywna mapa bezglutenowych restauracji i sklepów. Znajdź bliskie Tobie miejsca serwujące pyszne potrawy bez glutenu."
        />
      </Head>
      <header>
        <Topbar />
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
