import Link from "next/link";
import { HiArrowRight, HiPlay } from "react-icons/hi2";
import { IoGameControllerOutline } from "react-icons/io5";
import { GAMES_SECTION_ITEMS } from "@/utils/consts";
import SectionHeader from "@/components/common/SectionHeader";

const featuredGame =
  GAMES_SECTION_ITEMS.find((game) => game.featured) ?? GAMES_SECTION_ITEMS[0];
const otherGames = GAMES_SECTION_ITEMS.filter((game) => game !== featuredGame);

// "/gra-lapacz" -> "gra-lapacz", used for the per-game colour theme
const getGameSlug = (href: string) => href.replace(/^\//, "");

const GamesSection = () => {
  return (
    <section
      id="games-section"
      className="games-section"
      aria-labelledby="games-section-title"
    >
      <div className="games-section__wrapper">
        <SectionHeader
          id="games-section-title"
          theme="dark"
          eyebrow={
            <>
              <IoGameControllerOutline aria-hidden="true" />
              Gry
            </>
          }
          title="Mała przerwa, wielka frajda!"
          description="Wybierz bezglutenową przygodę, sprawdź swoją wiedzę albo pobij rekord. Która gra będzie dziś Twoja?"
          action={{ href: "/gry", label: "Strefa gier" }}
        />

        <div className="games-section__grid">
          <Link
            href={featuredGame.href}
            className={`game-card game-card--featured game-card--${getGameSlug(
              featuredGame.href,
            )}`}
          >
            <div className="game-card__screen" aria-hidden="true">
              <span className="game-card__sun" />
              <span className="game-card__hill game-card__hill--back" />
              <span className="game-card__hill game-card__hill--front" />
              <span className="game-card__spark game-card__spark--one">✦</span>
              <span className="game-card__spark game-card__spark--two">✧</span>
              <span className="game-card__spark game-card__spark--three">
                ✦
              </span>
              <span className="game-card__icon">{featuredGame.icon}</span>
            </div>
            <div className="game-card__body">
              <div className="game-card__meta">
                <span className="game-card__badge">{featuredGame.badge}</span>
                <span className="game-card__tag">Polecana gra</span>
              </div>
              <h3>{featuredGame.title}</h3>
              <p>{featuredGame.description}</p>
              <span className="game-card__button">
                <HiPlay aria-hidden="true" /> {featuredGame.label}
              </span>
            </div>
          </Link>

          {otherGames.map((game) => (
            <Link
              key={game.href}
              href={game.href}
              className={`game-card game-card--${getGameSlug(game.href)}`}
            >
              <div className="game-card__screen" aria-hidden="true">
                <span className="game-card__badge">{game.badge}</span>
                <span className="game-card__icon">{game.icon}</span>
                <span className="game-card__play">
                  <HiPlay />
                </span>
              </div>
              <div className="game-card__body">
                <h3>{game.title}</h3>
                <p>{game.description}</p>
                <span className="game-card__cta">
                  {game.label} <HiArrowRight aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
