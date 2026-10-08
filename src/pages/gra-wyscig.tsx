import "@/sass/main.scss";
import Head from "next/head";
import Topbar from "@/components/common/Topbar";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import GlutenFreeRace from "@/components/games/GlutenFreeRace";

const GlutenFreeRacePage = () => (
  <>
    <Head>
      <title>Bezglutenowy wyścig | Bezglutenowa Karola</title>
      <meta
        name="description"
        content="Wskakuj za kierownicę w Bezglutenowym wyścigu! Zbieraj pieczywo, omijaj przeszkody i sprawdź swój wynik w rankingu."
      />
    </Head>
    <header>
      <Topbar />
      <Header />
    </header>
    <main>
      <GlutenFreeRace />
    </main>
    <footer>
      <Footer />
    </footer>
  </>
);

export default GlutenFreeRacePage;
