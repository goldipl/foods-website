import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const KarolaGamePromo = () => (
  <section
    className="karola-game-promo"
    aria-labelledby="karola-game-promo-title"
  >
    <div className="karola-game-promo__card">
      <div className="karola-game-promo__content">
        <span className="karola-game-promo__eyebrow">Nowa przygoda czeka</span>
        <h2 id="karola-game-promo-title">
          Ruszaj z Karolą
          <span>do bezglutenowej krainy!</span>
        </h2>
        <p>
          Skacz przez kolorowe światy, pokonuj rozbrykane potworki i zbieraj
          złote ziarenka. Pięć krain pełnych niespodzianek czeka na odkrycie!
        </p>
        <div
          className="karola-game-promo__features"
          aria-label="Co czeka w grze"
        >
          <span>🌈 5 wyjątkowych krain</span>
          <span>👾 Potworki i bonusy</span>
          <span>🌾 Złote ziarenka</span>
        </div>
        <Link className="karola-game-promo__cta" href="/gra-karola">
          Zagraj z Karolą <HiArrowRight aria-hidden="true" />
        </Link>
      </div>

      <div className="karola-game-promo__world" aria-hidden="true">
        <span className="karola-game-promo__sun" />
        <span className="karola-game-promo__cloud karola-game-promo__cloud--one" />
        <span className="karola-game-promo__cloud karola-game-promo__cloud--two" />
        <span className="karola-game-promo__hill karola-game-promo__hill--back" />
        <span className="karola-game-promo__hill karola-game-promo__hill--front" />
        <span className="karola-game-promo__coin karola-game-promo__coin--one">
          ✦
        </span>
        <span className="karola-game-promo__coin karola-game-promo__coin--two">
          ✦
        </span>
        <span className="karola-game-promo__coin karola-game-promo__coin--three">
          ✦
        </span>
        <span className="karola-game-promo__platform karola-game-promo__platform--one" />
        <span className="karola-game-promo__platform karola-game-promo__platform--two" />
        <span className="karola-game-promo__karola">👩🏻‍🌾</span>
        <span className="karola-game-promo__monster">👾</span>
        <span className="karola-game-promo__sparkle karola-game-promo__sparkle--one">
          ✦
        </span>
        <span className="karola-game-promo__sparkle karola-game-promo__sparkle--two">
          ✧
        </span>
      </div>
    </div>
  </section>
);

export default KarolaGamePromo;
