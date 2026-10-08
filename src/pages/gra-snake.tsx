import "@/sass/main.scss";
import Head from "next/head";
import Topbar from "@/components/common/Topbar";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import GlutenFreeSnake from "@/components/games/GlutenFreeSnake";

const GlutenFreeSnakePage = () => (
  <>
    <Head>
      <title>Bezglutenowy Snake | Bezglutenowa Karola</title>
      <meta
        name="description"
        content="Zagraj w Bezglutenowego Snake’a! Zbieraj bezglutenowe pieczywo, zdobywaj punkty i sprawdź swój wynik w rankingu."
      />
    </Head>
    <header>
      <Topbar />
      <Header />
    </header>
    <main>
      <GlutenFreeSnake />
    </main>
    <footer>
      <Footer />
    </footer>
  </>
);

export default GlutenFreeSnakePage;
