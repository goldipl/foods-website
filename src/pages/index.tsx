import React from "react";
import Head from "next/head";
import "@/css/swiper-bundle.min.css";
import "@/sass/main.scss";
import Topbar from "@/components/common/Topbar";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Hero from "@/components/main-page/Hero";
import WelcomeSection from "@/components/main-page/WelcomeSection";
import BoxesInfoSection from "@/components/main-page/BoxesInfoSection";
import RecipesSection from "@/components/main-page/RecipesSection";
import RestaurantsSection from "@/components/main-page/RestaurantsSection";
import Contact from "@/components/main-page/Contact";
import ProductsSection from "@/components/main-page/ProductsSection";
import CooperationSection from "@/components/main-page/CooperationSection";
import Events from "@/components/main-page/Events";
import CeliacDiseaseBasicInfoSection from "@/components/main-page/CeliacDiseaseBasicInfoSection";
import CeliacDiseaseWhatsNextSection from "@/components/main-page/CeliacDiseaseWhatsNextSection";
import VideoSection from "@/components/main-page/VideoSection";
import MapSection from "@/components/main-page/MapSection";

const index = () => {
  return (
    <>
      <Head>
        <title>
          Bezglutenowa Karola - Przepisy Gluten Free | Celiakia - Karolina
          Wontorska
        </title>
        <meta
          name="description"
          content="Bezglutenowa Karola: Odkryj proste i pyszne przepisy bez glutenu, cukru i nabiału. Idealne dla osób z celiakią i na diecie eliminacyjnej. Gotuj zdrowo z Karoliną!"
        />
        <meta
          name="keywords"
          content="przepisy bezglutenowe, dieta bezglutenowa, celiakia, bez cukru, bez nabiału, Karolina Wontorska, bezglutenowe, gluten free, przepisy bez glutenu, zdrowe jedzenie"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:url" content="https://bezglutenowakarola.pl" />
        <meta
          property="og:title"
          content="Przepisy bezglutenowe i celiakia | Bezglutenowa Karola"
        />
        <meta property="og:site_name" content="Bezglutenowa Karola" />
        <meta
          property="og:description"
          content="Znajdź przepisy na dania bez glutenu, bez cukru, bez nabiału, idealne dla osób z celiakią. Zdrowe i smaczne jedzenie dla osób na diecie bezglutenowej."
        />
        <meta
          property="og:image"
          content="https://bezglutenowakarola.pl/_next/static/media/bezglutenowakarola-logo.3e6eebf5.svg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Przepisy bezglutenowe i celiakia | Bezglutenowa Karola"
        />
        <meta
          name="twitter:description"
          content="Przepisy bez glutenu, bez cukru, bez nabiału, stworzone z myślą o osobach z celiakią i na diecie bezglutenowej. Sprawdź zdrowe inspiracje kulinarne."
        />
        <meta
          name="twitter:image"
          content="https://bezglutenowakarola.pl/_next/static/media/bezglutenowakarola-logo.3e6eebf5.svg"
        />
        <meta
          name="google-site-verification"
          content="Wwdgti5L7WUD354p16SJSkp1xWEkAU95jfBNILTVeFc"
        />
      </Head>
      <header>
        <Topbar />
        <Header />
      </header>
      <main>
        <Hero />
        <BoxesInfoSection />
        <WelcomeSection />
        <RecipesSection />
        <RestaurantsSection />
        <ProductsSection />
        <CeliacDiseaseBasicInfoSection />
        <VideoSection />
        <CeliacDiseaseWhatsNextSection />
        <Events />
        <CooperationSection />
        <MapSection />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default index;
