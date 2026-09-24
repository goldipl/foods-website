import Head from "next/head";
import Topbar from "@/components/common/Topbar";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import GlutenFreeCatcher from "@/components/games/GlutenFreeCatcher";

const CatcherGamePage = () => (
  <>
    <Head>
      <title>Łap bezglutenowe produkty | Bezglutenowa Karola</title>
      <meta
        name="description"
        content="Zagraj w bezglutenowego catchera, zbieraj produkty i sprawdź swoje miejsce w rankingu."
      />
    </Head>
    <header>
      <Topbar />
      <Header />
    </header>
    <main>
      <GlutenFreeCatcher />
    </main>
    <footer>
      <Footer />
    </footer>
  </>
);

export default CatcherGamePage;
