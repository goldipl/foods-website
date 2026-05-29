import "@/sass/main.scss";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Topbar from "@/components/common/Topbar";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const ArticlePage = () => {
  return (
    <>
      <Head>
        <title>
          Jak zacząć życie bez glutenu - Artykuł | Bezglutenowa Karola
        </title>
        <meta
          name="description"
          content="Poznaj praktyczny przewodnik po rozpoczęciu życia bez glutenu: autor, data i porady krok po kroku."
        />
      </Head>
      <header>
        <Topbar />
        <Header />
      </header>
      <main>
        <section id="article-page" className="article-page">
          <div className="article-hero">
            <Image
              src="/img/welcome/wloski-makaron-gluten-free.jpg"
              alt="Bezglutenowy makaron"
              width={1400}
              height={700}
              priority
            />
            <div className="article-hero__overlay">
              <span>Porady bezglutenowe</span>
              <h1>Jak zacząć życie bez glutenu bez stresu</h1>
              <div className="article-hero__meta">
                <span>Autor: Karola</span>
                <span>Data: 12 maja 2026</span>
              </div>
            </div>
          </div>

          <div className="article-content">
            <div className="article-content__text">
              <p>
                Przejście na dietę bezglutenową może wydawać się trudne, ale
                wystarczy kilka prostych kroków, aby poczuć się pewniej w kuchni
                i sklepie. Zacznij od usunięcia produktów zawierających
                pszenicę, jęczmień i żyto oraz wybieraj te oznaczone jako
                bezglutenowe.
              </p>
              <p>
                Warto również nauczyć się czytać etykiety. Szukaj słów takich
                jak "dla celników", "bez glutenu" oraz unikać składników typu
                maltodekstryna, barwniki i aromaty, które mogą kryć białka
                glutenowe.
              </p>
              <h2>Praktyczne wskazówki na start</h2>
              <ul>
                <li>
                  Wprowadź zmiany stopniowo, zaczynając od prostych posiłków.
                </li>
                <li>
                  Wybieraj naturalne produkty bez dodatków: warzywa, owoce,
                  mięso, ryby.
                </li>
                <li>
                  Planuj listę zakupów i kontroluj etykiety na opakowaniach.
                </li>
                <li>
                  Szukaj wsparcia w grupach tematycznych i od osób, które już
                  przeszły tę drogę.
                </li>
              </ul>
              <p>
                Dieta bezglutenowa nie musi oznaczać rezygnacji z przyjemności.
                Dzięki odpowiednim zamiennikom i ulubionym przepisom możesz jeść
                smacznie, bezpiecznie i zdrowo. Pamiętaj tylko, żeby zawsze
                wybierać certyfikowane produkty oraz pilnować, by przyrządzanie
                posiłków odbywało się w czystym otoczeniu.
              </p>
              <blockquote>
                Prawdziwa zmiana zaczyna się od zrozumienia swoich potrzeb i
                znalezienia prostych rozwiązań na co dzień.
              </blockquote>
              <p>
                Jeśli dopiero zaczynasz, to najlepszy moment, by zaplanować
                pierwsze posiłki i przygotować listę produktów, które będziesz
                kupować regularnie. Dzięki temu unikniesz niepotrzebnego stresu
                i będziesz gotowy na kulinarne wyzwania.
              </p>
            </div>

            <div className="article-content__aside">
              <div className="article-aside-card">
                <h2>Masz pytania?</h2>
                <p>
                  Skorzystaj z sekcji "O mnie" lub sprawdź więcej artykułów, aby
                  znaleźć inspiracje i gotowe porady na każdy dzień.
                </p>
                <Link href="/#o-mnie" className="primary-button__text">
                  O mnie
                </Link>
                <Link href="/artykuly" className="primary-button__text">
                  Zobacz artykuły
                </Link>
              </div>
            </div>
          </div>
          <div className="article-page__navigation">
            <Link href="/" className="primary-button__text">
              Powrót do strony głównej
            </Link>
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default ArticlePage;
