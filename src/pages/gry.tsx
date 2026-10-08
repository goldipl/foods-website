import "@/sass/main.scss";
import Head from "next/head";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import { GAMES_SECTION_ITEMS } from "@/utils/consts";
import Topbar from "@/components/common/Topbar";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const GamesPage = () => (
  <>
    <Head>
      <title>Gry bezglutenowe – zagraj i odpocznij | Bezglutenowa Karola</title>
      <meta
        name="description"
        content="Zrób sobie przerwę i zagraj! Poznaj bezglutenowe gry: łapacz produktów, Snake, quiz i wyścig."
      />
    </Head>
    <header>
      <Topbar />
      <Header />
    </header>
    <main className="games-page">
      <section className="games-page__hero" aria-labelledby="games-page-title">
        <div className="games-page__orb games-page__orb--one" aria-hidden="true" />
        <div className="games-page__orb games-page__orb--two" aria-hidden="true" />
        <div className="games-page__hero-inner">
          <span className="games-page__floating games-page__floating--one" aria-hidden="true">
            🍞
          </span>
          <span className="games-page__floating games-page__floating--two" aria-hidden="true">
            🥑
          </span>
          <span className="games-page__floating games-page__floating--three" aria-hidden="true">
            ✨
          </span>

          <div className="games-page__hero-content">
            <span className="games-page__eyebrow">
              <span aria-hidden="true">✦</span> Bezglutenowa strefa zabawy
            </span>
            <h1 id="games-page-title">
              Mała przerwa.
              <br />
              <span>Wielka frajda!</span>
            </h1>
            <p>
              Odłóż na chwilę codzienność i wskocz do gry. Czekają na Ciebie
              szybkie wyzwania, dobre wyniki i oczywiście bezglutenowe smakołyki.
              Wybierz swoją rozgrywkę!
            </p>
            <Link className="games-page__hero-cta" href="#lista-gier">
              Wybieram grę <HiArrowRight aria-hidden="true" />
            </Link>
            <div className="games-page__hero-note">
              <span aria-hidden="true">🎮</span> Cztery gry. Jedna pyszna zabawa.
            </div>
          </div>

          <div className="games-page__hero-art" aria-hidden="true">
            <div className="games-page__gamepad">🎮</div>
            <div className="games-page__art-chip games-page__art-chip--top">
              <span>⭐</span> Nowy rekord!
            </div>
            <div className="games-page__art-chip games-page__art-chip--bottom">
              <span>🥖</span> Gluten free
            </div>
          </div>
        </div>
      </section>

      <section
        className="games-page__listing"
        id="lista-gier"
        aria-labelledby="games-list-title"
      >
        <div className="games-page__listing-heading">
          <div>
            <span className="games-page__section-kicker">Wybierz swój challenge</span>
            <h2 id="games-list-title">Na co masz dziś ochotę?</h2>
          </div>
          <p>Każda gra to nowa okazja, żeby pobić swój rekord.</p>
        </div>

        <div className="games-page__grid">
          {GAMES_SECTION_ITEMS.map((game, index) => (
            <article
              className={`games-page__card games-page__card--${index + 1}`}
              key={game.href}
            >
              <div className="games-page__card-top">
                <span className="games-page__card-badge">{game.badge}</span>
                <span className="games-page__card-number">
                  0{index + 1}
                </span>
              </div>
              <div className="games-page__card-icon" aria-hidden="true">
                {game.icon}
              </div>
              <h3>{game.title}</h3>
              <p>{game.description}</p>
              <Link className="games-page__play-button" href={game.href}>
                {game.label} <HiArrowRight aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="games-page__outro" aria-label="Zaproszenie do gry">
        <span className="games-page__outro-spark" aria-hidden="true">
          ✨
        </span>
        <div>
          <h2>Gotowa/y na jeszcze jedną rundę?</h2>
          <p>Wybierz grę, rozsiądź się wygodnie i baw się dobrze!</p>
        </div>
        <Link href="/gra-lapacz" className="games-page__outro-cta">
          Zaczynamy <HiArrowRight aria-hidden="true" />
        </Link>
      </section>
    </main>
    <footer>
      <Footer />
    </footer>
  </>
);

export default GamesPage;
