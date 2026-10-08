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
          content="Zaplanuj bezglutenowe posiłki na kilka dni i odkryj sprawdzone przepisy Karoli na śniadanie, obiad i kolację."
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
