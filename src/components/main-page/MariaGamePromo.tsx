import Link from "next/link";
import { HiArrowRight, HiSparkles } from "react-icons/hi2";

const MariaGamePromo = () => (
  <section
    className="maria-game-promo"
    aria-labelledby="maria-game-promo-title"
  >
    <div className="maria-game-promo__card">
      <div className="maria-game-promo__content">
        <span className="maria-game-promo__eyebrow">Nowa przygoda czeka</span>
        <h2 id="maria-game-promo-title">
          Ruszaj z Marią
          <span>do bezglutenowej krainy!</span>
        </h2>
        <p>
          Skacz przez kolorowe światy, pokonuj rozbrykane potworki i zbieraj
          złote ziarenka. Pięć krain pełnych niespodzianek czeka na odkrycie!
        </p>
        <div
          className="maria-game-promo__features"
          aria-label="Co czeka w grze"
        >
          <span>🌈 5 wyjątkowych krain</span>
          <span>👾 Potworki i bonusy</span>
          <span>🌾 Złote ziarenka</span>
        </div>
        <Link className="maria-game-promo__cta" href="/gra-maria">
          Zagraj z Marią <HiArrowRight aria-hidden="true" />
        </Link>
      </div>

      <div className="maria-game-promo__world" aria-hidden="true">
        <span className="maria-game-promo__sun" />
        <span className="maria-game-promo__cloud maria-game-promo__cloud--one" />
        <span className="maria-game-promo__cloud maria-game-promo__cloud--two" />
        <span className="maria-game-promo__hill maria-game-promo__hill--back" />
        <span className="maria-game-promo__hill maria-game-promo__hill--front" />
        <span className="maria-game-promo__coin maria-game-promo__coin--one">
          ✦
        </span>
        <span className="maria-game-promo__coin maria-game-promo__coin--two">
          ✦
        </span>
        <span className="maria-game-promo__coin maria-game-promo__coin--three">
          ✦
        </span>
        <span className="maria-game-promo__platform maria-game-promo__platform--one" />
        <span className="maria-game-promo__platform maria-game-promo__platform--two" />
        <span className="maria-game-promo__maria">👩🏻‍🌾</span>
        <span className="maria-game-promo__monster">👾</span>
        <span className="maria-game-promo__sparkle maria-game-promo__sparkle--one">
          ✦
        </span>
        <span className="maria-game-promo__sparkle maria-game-promo__sparkle--two">
          ✧
        </span>
      </div>
    </div>
  </section>
);

export default MariaGamePromo;
