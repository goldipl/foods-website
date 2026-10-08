import Link from "next/link";
import { HiChevronRight } from "react-icons/hi2";
import { GAMES_SECTION_ITEMS } from "@/utils/consts";

const GamesSection = () => {
  return (
    <section id="games-section" className="games-section">
      <div className="games-section__wrapper">
        <div className="games-section__header">
          <span className="games-section__eyebrow">Zagraj i odpocznij</span>
          <h2>Gry, które warto sprawdzić</h2>
          <p>
            Podczas codziennych obowiązków warto zrobić sobie chwilę relaksu.
            Wypróbuj nasze gry i sprawdź, czy potrafisz złapać najwięcej
            bezglutenowych smaków lub rozwiązać quiz z wiedzy o diecie
            bezglutenowej.
          </p>
        </div>

        <div className="games-section__grid">
          {GAMES_SECTION_ITEMS.map((game) => (
            <Link key={game.href} href={game.href} className="game-card">
              <div className="game-card__badge">{game.badge}</div>
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
