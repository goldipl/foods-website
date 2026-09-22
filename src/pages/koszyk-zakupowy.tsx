import "@/sass/main.scss";
import Head from "next/head";
import Topbar from "@/components/common/Topbar";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ShoppingBasketPlanner from "@/components/shopping/ShoppingBasketPlanner";

const ShoppingBasketPage = () => {
  return (
    <>
      <Head>
        <title>Bezglutenowy koszyk zakupowy | Bezglutenowa Karola</title>
        <meta
          name="description"
          content="Zaplanuj bezglutenowe zakupy według sklepu, budżetu, liczby osób i dni. Otrzymaj gotową listę produktów oraz inspiracje na przepisy."
        />
      </Head>
      <header>
        <Topbar />
        <Header />
      </header>
      <main>
        <ShoppingBasketPlanner />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default ShoppingBasketPage;
