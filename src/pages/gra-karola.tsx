import Head from "next/head";
import Topbar from "@/components/common/Topbar";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import GlutenFreePlatformer from "@/components/games/GlutenFreePlatformer";

const GlutenFreePlatformerPage = () => (
  <>
    <Head>
      <title>Karola i bezglutenowa kraina | Bezglutenowa Karola</title>
      <meta
        name="description"
        content="Pomóż Karoli przejść pięć długich, różnorodnych krain. Pokonuj potworki, zbieraj złote ziarenka i korzystaj z pomocnych bonusów."
      />
    </Head>
    <header>
      <Topbar />
      <Header />
    </header>
    <main>
      <GlutenFreePlatformer />
    </main>
    <footer>
      <Footer />
    </footer>
  </>
);

export default GlutenFreePlatformerPage;
