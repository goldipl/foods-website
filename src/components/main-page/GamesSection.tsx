import Link from "next/link";
import { HiArrowRight, HiChevronRight, HiSparkles } from "react-icons/hi2";
import { GAMES_SECTION_ITEMS } from "@/utils/consts";

const GamesSection = () => {
  return (
    <section
      id="games-section"
      className="games-section"
      aria-labelledby="games-section-title"
    >
      <span className="games-section__floating games-section__floating--bread" aria-hidden="true">
        🍞
      </span>
      <span className="games-section__floating games-section__floating--avocado" aria-hidden="true">
        🥑
      </span>
      <span className="games-section__floating games-section__floating--sparkle" aria-hidden="true">
        ✨
      </span>
      <div className="games-section__wrapper">
        <div className="games-section__header">
          <div className="games-section__heading-copy">
            <span className="games-section__eyebrow">
              <HiSparkles aria-hidden="true" /> Zagraj i odpocznij
            </span>
            <h2 id="games-section-title">
              Mała przerwa.
              <span>Wielka frajda!</span>
            </h2>
            <p>
              Wybierz bezglutenową przygodę, sprawdź swoją wiedzę albo pobij
              rekord. Która gra będzie dziś Twoja?
            </p>
          </div>
          <Link className="games-section__all-games" href="/gry">
            Strefa gier <HiArrowRight aria-hidden="true" />
          </Link>
        </div>

        <div className="games-section__grid">
          {GAMES_SECTION_ITEMS.map((game, index) => (
            <Link
              key={game.href}
              href={game.href}
              className={`game-card game-card--${index + 1}`}
            >
              <div className="game-card__top">
                <span className="game-card__badge">{game.badge}</span>
                <span className="game-card__number">0{index + 1}</span>
              </div>
              <div className="game-card__icon" aria-hidden="true">
                {game.icon}
              </div>

              <div className="game-card__content">
                <h3>{game.title}</h3>
                <p>{game.description}</p>
              </div>

              <div className="game-card__cta">
                <span>{game.label}</span>
                <HiChevronRight />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
