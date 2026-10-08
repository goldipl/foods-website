import "@/sass/main.scss";
import Head from "next/head";
import Topbar from "@/components/common/Topbar";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import GlutenFreeQuiz from "@/components/games/GlutenFreeQuiz";

const GlutenFreeQuizPage = () => (
  <>
    <Head>
      <title>Bezglutenowy quiz | Bezglutenowa Karola</title>
      <meta
        name="description"
        content="Sprawdź swoją wiedzę o bezglutenowych produktach, etykietach i kuchni. Zagraj w quiz i sprawdź swój wynik w lokalnym rankingu."
      />
    </Head>
    <header>
      <Topbar />
      <Header />
    </header>
    <main>
      <GlutenFreeQuiz />
    </main>
    <footer>
      <Footer />
    </footer>
  </>
);

export default GlutenFreeQuizPage;
