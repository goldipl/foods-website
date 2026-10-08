import "@/sass/main.scss";
import Head from "next/head";
import Topbar from "@/components/common/Topbar";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import MealPlanPlanner from "@/components/meal-planner/MealPlanPlanner";

const MealPlannerPage = () => {
  return (
    <>
      <Head>
        <title>Bezglutenowy planer posiłków | Bezglutenowa Karola</title>
        <meta
          name="description"
          content="Ułóż bezglutenowy plan posiłków na 1–5 dni na bazie przepisów Bezglutenowej Karoli. Znajdź inspirację na śniadanie, obiad i kolację."
        />
      </Head>
      <header>
        <Topbar />
        <Header />
      </header>
      <MealPlanPlanner />
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default MealPlannerPage;
