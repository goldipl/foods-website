import "@/sass/main.scss";
import Head from "next/head";
import Link from "next/link";
import { IconType } from "react-icons";
import { HiArrowRight, HiHome, HiMagnifyingGlass } from "react-icons/hi2";
import {
  PiBowlFood,
  PiCake,
  PiCoffee,
  PiCookie,
  PiGameController,
  PiMapPin,
} from "react-icons/pi";
import Topbar from "@/components/common/Topbar";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

interface NotFoundLink {
  label: string;
  href: string;
  description: string;
  icon: IconType;
}

const NOT_FOUND_LINKS: NotFoundLink[] = [
  {
    label: "Śniadania",
    href: "/sniadania",
    description: "Owsianki, tortille i pieczywo",
    icon: PiCoffee,
  },
  {
    label: "Obiady",
    href: "/obiady",
    description: "Sycące dania główne na co dzień",
    icon: PiBowlFood,
  },
  {
    label: "Desery",
    href: "/desery",
    description: "Ciasta, serniki i wypieki",
    icon: PiCake,
  },
  {
    label: "Przystawki i sałatki",
    href: "/przekaski",
    description: "Przekąski na imprezy i lunch",
    icon: PiCookie,
  },
  {
    label: "Bezglutenowe miejsca",
    href: "/bezglutenowe-miejsca",
    description: "Mapa sprawdzonych lokali",
    icon: PiMapPin,
  },
  {
    label: "Gry",
    href: "/gry",
    description: "Chwila bezglutenowej zabawy",
    icon: PiGameController,
  },
];

const NotFoundPage = () => (
  <>
    <Head>
      <title>Nie znaleziono strony (404) | Bezglutenowa Karola</title>
      <meta
        name="description"
        content="Ups! Ta strona nie istnieje. Wróć na stronę główną albo odkryj bezglutenowe przepisy i miejsca od Bezglutenowej Karoli."
      />
      <meta name="robots" content="noindex, follow" />
    </Head>
    <header>
      <Topbar />
      <Header />
    </header>
    <main className="not-found-page">
      <section className="not-found-page__hero" aria-labelledby="not-found-title">
        <span
          className="not-found-page__orb not-found-page__orb--one"
          aria-hidden="true"
        />
        <span
          className="not-found-page__orb not-found-page__orb--two"
          aria-hidden="true"
        />
        <span
          className="not-found-page__floating not-found-page__floating--one"
          aria-hidden="true"
        >
          🥑
        </span>
        <span
          className="not-found-page__floating not-found-page__floating--two"
          aria-hidden="true"
        >
          🍓
        </span>
        <span
          className="not-found-page__floating not-found-page__floating--three"
          aria-hidden="true"
        >
          ✨
        </span>

        <div className="not-found-page__inner">
          <div className="not-found-page__code" aria-hidden="true">
            <span className="not-found-page__digit">4</span>
            <span className="not-found-page__plate">
              <span className="not-found-page__plate-rim" />
              <span className="not-found-page__crumb not-found-page__crumb--one" />
              <span className="not-found-page__crumb not-found-page__crumb--two" />
              <span className="not-found-page__crumb not-found-page__crumb--three" />
              <span className="not-found-page__chip">🍽️ Pusty talerz</span>
            </span>
            <span className="not-found-page__digit">4</span>
          </div>

          <span className="not-found-page__eyebrow">Błąd 404</span>
          <h1 id="not-found-title">
            Ups! Tej strony
            <span>nie ma w menu</span>
          </h1>
          <p>
            Strona, której szukasz, mogła zostać przeniesiona, zmienić adres
            albo po prostu nigdy nie trafiła na nasz talerz. Spokojnie – mamy
            mnóstwo innych bezglutenowych smakołyków!
          </p>

          <div className="not-found-page__actions">
            <Link className="not-found-page__cta" href="/">
              <HiHome aria-hidden="true" /> Strona główna
            </Link>
            <Link
              className="not-found-page__cta not-found-page__cta--ghost"
              href="/szukaj-przepisow"
            >
              <HiMagnifyingGlass aria-hidden="true" /> Szukaj przepisów
            </Link>
          </div>
        </div>
      </section>

      <section
        className="not-found-page__links"
        aria-labelledby="not-found-links-title"
      >
        <div className="not-found-page__links-heading">
          <span className="not-found-page__kicker">Zamiast tego</span>
          <h2 id="not-found-links-title">Może skusisz się na coś z tego?</h2>
        </div>

        <ul className="not-found-page__grid">
          {NOT_FOUND_LINKS.map(({ label, href, description, icon: Icon }) => (
            <li key={href}>
              <Link className="not-found-page__card" href={href}>
                <span className="not-found-page__card-icon" aria-hidden="true">
                  <Icon />
                </span>
                <span className="not-found-page__card-text">
                  <strong>{label}</strong>
                  <span>{description}</span>
                </span>
                <HiArrowRight
                  className="not-found-page__card-arrow"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
    <footer>
      <Footer />
    </footer>
  </>
);

export default NotFoundPage;
