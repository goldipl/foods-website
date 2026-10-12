import Head from "next/head";
import Topbar from "@/components/common/Topbar";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import GlutenFreePlatformer from "@/components/games/GlutenFreePlatformer";

const GlutenFreePlatformerPage = () => (
  <>
    <Head>
      <title>Maria i bezglutenowa kraina | Bezglutenowa Karola</title>
      <meta
        name="description"
        content="Pomóż Marii przejść pięć platformowych poziomów, zbieraj złote ziarenka i uważaj na przeszkody w bezglutenowej krainie."
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
