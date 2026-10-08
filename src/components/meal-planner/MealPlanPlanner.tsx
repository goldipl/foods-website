import { useMemo, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiCalendar,
  FiCoffee,
  FiHeart,
  FiMoon,
  FiRefreshCw,
  FiSun,
} from "react-icons/fi";
import { appetizersRecipesData } from "@/data/recipes/appetizers-recipes";
import { breakfastsRecipesData } from "@/data/recipes/breakfasts-recipes";
import { dinnersRecipesData } from "@/data/recipes/dinners-recipes";

type Recipe = {
  href: string;
  description: string;
  altText: string;
  imgSrc: StaticImageData;
};

type Meal = Recipe & {
  type: "Śniadanie" | "Obiad" | "Kolacja";
};

type PlannedDay = {
  number: number;
  meals: Meal[];
};

const breakfasts = breakfastsRecipesData as Recipe[];
const lunches = dinnersRecipesData as Recipe[];
const suppers = appetizersRecipesData as Recipe[];

const mealTypes: {
  label: Meal["type"];
  icon: typeof FiCoffee;
}[] = [
  { label: "Śniadanie", icon: FiCoffee },
  { label: "Obiad", icon: FiSun },
  { label: "Kolacja", icon: FiMoon },
];

const MealPlanPlanner = () => {
  const [days, setDays] = useState(3);
  const [planVersion, setPlanVersion] = useState(0);
  const [hasGenerated, setHasGenerated] = useState(false);

  const plan = useMemo<PlannedDay[]>(() => {
    const usedRecipes = new Set<string>();
    const pickRecipe = (
      pool: Recipe[],
      dayIndex: number,
      mealIndex: number,
    ) => {
      const available = pool.filter((recipe) => !usedRecipes.has(recipe.href));
      const choices = available.length ? available : pool;
      const recipe =
        choices[
          (planVersion * 7 + dayIndex * 3 + mealIndex * 5) % choices.length
        ];

      if (available.length) usedRecipes.add(recipe.href);
      return recipe;
    };

    return Array.from({ length: days }, (_, dayIndex) => ({
      number: dayIndex + 1,
      meals: [
        pickRecipe(breakfasts, dayIndex, 0),
        pickRecipe(lunches, dayIndex, 1),
        pickRecipe(suppers, dayIndex, 2),
      ].map((recipe, mealIndex) => ({
        ...recipe,
        type: mealTypes[mealIndex].label,
      })),
    }));
  }, [days, planVersion]);

  const generatePlan = () => {
    setPlanVersion((version) => version + 1);
    setHasGenerated(true);
  };

  return (
    <main className="meal-planner">
      <section className="meal-planner__hero">
        <div className="meal-planner__hero-inner">
          <div className="meal-planner__hero-copy">
            <span className="meal-planner__eyebrow">
              <FiHeart aria-hidden="true" /> DOBRZE, SMACZNIE, BEZ GLUTENU
            </span>
            <h1>
              Mniej zastanawiania.
              <br />
              <span>Więcej dobrego jedzenia.</span>
            </h1>
            <p>
              Zaplanuj bezglutenowe posiłki na kilka dni i odkryj sprawdzone
              przepisy Karoli na śniadanie, obiad i kolację.
            </p>
            <div className="meal-planner__trust">
              <span>
                <FiCalendar aria-hidden="true" /> Plan na 1–5 dni
              </span>
              <span>
                <FiHeart aria-hidden="true" /> Same bezglutenowe inspiracje
              </span>
            </div>
          </div>
          <div className="meal-planner__hero-art" aria-hidden="true">
            <span className="meal-planner__hero-orbit meal-planner__hero-orbit--one" />
            <span className="meal-planner__hero-orbit meal-planner__hero-orbit--two" />
            <span className="meal-planner__hero-sparkle">🍽️</span>
            <span className="meal-planner__hero-note">
              <FiHeart /> Z myślą o Tobie
            </span>
          </div>
        </div>
      </section>

      <div className="meal-planner__body">
        <section className="meal-planner__builder" aria-labelledby="plan-title">
          <div className="meal-planner__builder-copy">
            <span className="meal-planner__step">TWÓJ PLAN, TWOJE TEMPO</span>
            <h2 id="plan-title">Na ile dni planujemy?</h2>
            <p>Wybierz długość planu. Resztą zajmiemy się za Ciebie.</p>
          </div>
          <div className="meal-planner__controls">
            <div className="meal-planner__day-picker" aria-label="Liczba dni">
              {[1, 2, 3, 4, 5].map((dayCount) => (
                <button
                  key={dayCount}
                  type="button"
                  className={days === dayCount ? "is-active" : ""}
                  aria-pressed={days === dayCount}
                  onClick={() => setDays(dayCount)}
                >
                  <strong>{dayCount}</strong>
                  <span>{dayCount === 1 ? "dzień" : "dni"}</span>
                </button>
              ))}
            </div>
            <button
              className="meal-planner__generate"
              type="button"
              onClick={generatePlan}
            >
              {hasGenerated ? "Wylosuj nowy plan" : "Ułóż mój plan"}
              {hasGenerated ? (
                <FiRefreshCw aria-hidden="true" />
              ) : (
                <FiArrowRight aria-hidden="true" />
              )}
            </button>
          </div>
        </section>

        {hasGenerated ? (
          <section
            className="meal-planner__results"
            aria-live="polite"
            key={`${days}-${planVersion}`}
          >
            <div className="meal-planner__results-heading">
              <div>
                <span className="meal-planner__step">GOTOWE — SMACZNEGO!</span>
                <h2>
                  Twój plan na {days} {days === 1 ? "dzień" : "dni"}
                </h2>
                <p>Inspiracje na każdy posiłek, prosto z przepisów Karoli.</p>
              </div>
              <button
                className="meal-planner__shuffle"
                type="button"
                onClick={generatePlan}
              >
                <FiRefreshCw aria-hidden="true" /> Losuj inny zestaw
              </button>
            </div>

            <div className="meal-planner__days">
              {plan.map((day) => (
                <article className="meal-planner__day" key={day.number}>
                  <header className="meal-planner__day-heading">
                    <span className="meal-planner__day-number">
                      {String(day.number).padStart(2, "0")}
                    </span>
                    <div>
                      <span className="meal-planner__step">PLAN POSIŁKÓW</span>
                      <h3>Dzień {day.number}</h3>
                    </div>
                    <span className="meal-planner__day-count">3 pomysły</span>
                  </header>

                  <div className="meal-planner__meal-list">
                    {day.meals.map((meal, mealIndex) => {
                      const MealIcon = mealTypes[mealIndex].icon;

                      return (
                        <Link
                          className="meal-planner__meal"
                          href={meal.href}
                          key={`${meal.type}-${meal.href}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div className="meal-planner__meal-image">
                            <Image
                              src={meal.imgSrc}
                              alt={meal.altText}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1000px) 45vw, 30vw"
                            />
                          </div>
                          <div className="meal-planner__meal-content">
                            <span className="meal-planner__meal-type">
                              <MealIcon aria-hidden="true" />
                              {meal.type}
                            </span>
                            <h4>{meal.description}</h4>
                            <span className="meal-planner__meal-link">
                              Zobacz przepis <FiArrowRight aria-hidden="true" />
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </article>
              ))}
            </div>

            <div className="meal-planner__footer">
              <p>
                <FiHeart aria-hidden="true" /> Wszystkie przepisy są bez
                glutenu. Zawsze sprawdzaj etykiety produktów i składniki.
              </p>
              <Link href="/szukaj-przepisow">
                Odkryj wszystkie przepisy <FiArrowRight aria-hidden="true" />
              </Link>
            </div>
          </section>
        ) : (
          <section className="meal-planner__empty" aria-label="Podgląd planera">
            <div className="meal-planner__empty-icon">
              <FiCoffee aria-hidden="true" />
            </div>
            <div>
              <span className="meal-planner__step">
                MAŁY PLAN, DUŻA RÓŻNICA
              </span>
              <h2>Gotowa/y na smaczny tydzień?</h2>
              <p>
                Wybierz liczbę dni i kliknij „Ułóż mój plan”. Podpowiemy Ci
                przepisy na śniadanie, obiad i kolację.
              </p>
            </div>
            <div className="meal-planner__empty-decoration" aria-hidden="true">
              <FiSun />
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default MealPlanPlanner;
