import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import {
  FiCheck,
  FiChevronRight,
  FiImage,
  FiShoppingBag,
} from "react-icons/fi";
import { appetizersRecipesData } from "@/data/recipes/appetizers-recipes";
import { breakfastsRecipesData } from "@/data/recipes/breakfasts-recipes";
import { dessertsRecipesData } from "@/data/recipes/desserts-recipes";
import { dinnersRecipesData } from "@/data/recipes/dinners-recipes";

type Recipe = {
  id: number;
  href: string;
  description: string;
  imgSrc?: { src: string } | string;
  tags?: string[];
};

type SuggestedMeal = Recipe & {
  mealType: "Śniadanie" | "Obiad" | "Kolacja";
};

type BasketItem = {
  name: string;
  quantityPerPersonPerDay: number;
  packageSize: number;
  unit: "g" | "szt." | "ml";
  packageLabel: string;
  packagePrice: number;
  category: string;
};

const baseBasket: BasketItem[] = [
  {
    name: "Chleb bezglutenowy",
    quantityPerPersonPerDay: 0.25,
    packageSize: 1,
    unit: "szt.",
    packageLabel: "bochenek",
    packagePrice: 12,
    category: "Śniadania",
  },
  {
    name: "Jajka",
    quantityPerPersonPerDay: 0.7,
    packageSize: 10,
    unit: "szt.",
    packageLabel: "opakowanie 10 szt.",
    packagePrice: 15,
    category: "Śniadania",
  },
  {
    name: "Kurczak",
    quantityPerPersonPerDay: 100,
    packageSize: 600,
    unit: "g",
    packageLabel: "opakowanie 600 g",
    packagePrice: 26,
    category: "Obiady",
  },
  {
    name: "Pomidory",
    quantityPerPersonPerDay: 0.5,
    packageSize: 6,
    unit: "szt.",
    packageLabel: "opakowanie 6 szt.",
    packagePrice: 10,
    category: "Warzywa",
  },
  {
    name: "Mozzarella",
    quantityPerPersonPerDay: 0.17,
    packageSize: 2,
    unit: "szt.",
    packageLabel: "opakowanie 2 kulek",
    packagePrice: 12,
    category: "Nabiał",
  },
  {
    name: "Ryż",
    quantityPerPersonPerDay: 80,
    packageSize: 400,
    unit: "g",
    packageLabel: "opakowanie 400 g",
    packagePrice: 8,
    category: "Obiady",
  },
  {
    name: "Jogurt naturalny",
    quantityPerPersonPerDay: 0.33,
    packageSize: 2,
    unit: "szt.",
    packageLabel: "opakowanie 2 szt.",
    packagePrice: 7,
    category: "Nabiał",
  },
  {
    name: "Przekąska bezglutenowa",
    quantityPerPersonPerDay: 0.33,
    packageSize: 1,
    unit: "szt.",
    packageLabel: "opakowanie",
    packagePrice: 9,
    category: "Przekąski",
  },
  {
    name: "Warzywa do sałatki",
    quantityPerPersonPerDay: 0.33,
    packageSize: 1,
    unit: "szt.",
    packageLabel: "zestaw",
    packagePrice: 12,
    category: "Warzywa",
  },
  {
    name: "Oliwa i przyprawy",
    quantityPerPersonPerDay: 0.08,
    packageSize: 1,
    unit: "szt.",
    packageLabel: "zestaw",
    packagePrice: 8,
    category: "Spiżarnia",
  },
  {
    name: "Awokado",
    quantityPerPersonPerDay: 0.17,
    packageSize: 2,
    unit: "szt.",
    packageLabel: "siatka 2 szt.",
    packagePrice: 11,
    category: "Warzywa",
  },
  {
    name: "Papryka",
    quantityPerPersonPerDay: 0.33,
    packageSize: 3,
    unit: "szt.",
    packageLabel: "opakowanie 3 szt.",
    packagePrice: 10,
    category: "Warzywa",
  },
  {
    name: "Cebula",
    quantityPerPersonPerDay: 0.5,
    packageSize: 1,
    unit: "szt.",
    packageLabel: "siatka",
    packagePrice: 5,
    category: "Warzywa",
  },
  {
    name: "Czosnek",
    quantityPerPersonPerDay: 0.08,
    packageSize: 1,
    unit: "szt.",
    packageLabel: "główka",
    packagePrice: 3,
    category: "Warzywa",
  },
  {
    name: "Marchew",
    quantityPerPersonPerDay: 0.5,
    packageSize: 1,
    unit: "szt.",
    packageLabel: "pęczek",
    packagePrice: 5,
    category: "Warzywa",
  },
  {
    name: "Łosoś",
    quantityPerPersonPerDay: 70,
    packageSize: 300,
    unit: "g",
    packageLabel: "opakowanie 300 g",
    packagePrice: 25,
    category: "Ryby",
  },
  {
    name: "Feta",
    quantityPerPersonPerDay: 35,
    packageSize: 200,
    unit: "g",
    packageLabel: "opakowanie 200 g",
    packagePrice: 9,
    category: "Nabiał",
  },
  {
    name: "Ciecierzyca",
    quantityPerPersonPerDay: 0.17,
    packageSize: 2,
    unit: "szt.",
    packageLabel: "puszki 2 szt.",
    packagePrice: 8,
    category: "Spiżarnia",
  },
  {
    name: "Mleko",
    quantityPerPersonPerDay: 80,
    packageSize: 1000,
    unit: "ml",
    packageLabel: "karton 1 l",
    packagePrice: 4,
    category: "Nabiał",
  },
  {
    name: "Płatki owsiane bezglutenowe",
    quantityPerPersonPerDay: 35,
    packageSize: 500,
    unit: "g",
    packageLabel: "opakowanie 500 g",
    packagePrice: 9,
    category: "Spiżarnia",
  },
  {
    name: "Mąka gryczana",
    quantityPerPersonPerDay: 25,
    packageSize: 500,
    unit: "g",
    packageLabel: "opakowanie 500 g",
    packagePrice: 8,
    category: "Spiżarnia",
  },
  {
    name: "Makaron bezglutenowy",
    quantityPerPersonPerDay: 45,
    packageSize: 400,
    unit: "g",
    packageLabel: "opakowanie 400 g",
    packagePrice: 9,
    category: "Spiżarnia",
  },
  {
    name: "Passata pomidorowa",
    quantityPerPersonPerDay: 80,
    packageSize: 500,
    unit: "ml",
    packageLabel: "butelka 500 ml",
    packagePrice: 6,
    category: "Spiżarnia",
  },
  {
    name: "Banany",
    quantityPerPersonPerDay: 0.33,
    packageSize: 1,
    unit: "szt.",
    packageLabel: "kiść",
    packagePrice: 6,
    category: "Owoce",
  },
  {
    name: "Mrożone owoce",
    quantityPerPersonPerDay: 35,
    packageSize: 450,
    unit: "g",
    packageLabel: "opakowanie 450 g",
    packagePrice: 13,
    category: "Owoce",
  },
];

const recipes: Recipe[] = [
  ...(breakfastsRecipesData as Recipe[]),
  ...(dinnersRecipesData as Recipe[]),
  ...(appetizersRecipesData as Recipe[]),
  ...(dessertsRecipesData as Recipe[]),
];

const mealTypes: SuggestedMeal["mealType"][] = [
  "Śniadanie",
  "Obiad",
  "Kolacja",
];

const packageWord = (count: number) => {
  if (count === 1) return "opakowanie";
  if (count >= 2 && count <= 4) return "opakowania";
  return "opakowań";
};

const ShoppingBasketPlanner = () => {
  const [shop, setShop] = useState("Lidl");
  const [budget, setBudget] = useState("150");
  const [people, setPeople] = useState("2");
  const [days, setDays] = useState("3");
  const [mode, setMode] = useState("standard");
  const [hasGenerated, setHasGenerated] = useState(false);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [imageSeed, setImageSeed] = useState(0);

  const basket = useMemo(() => {
    const servings = Number(people) * Number(days);
    const priceMultiplier =
      shop === "Biedronka" ? 0.94 : shop === "Dowolny sklep" ? 1 : 1.04;
    const modeMultiplier = mode === "economy" ? 0.85 : 1;

    return baseBasket.map((item) => {
      const requiredUnits = item.quantityPerPersonPerDay * servings;
      const packages = Math.max(1, Math.ceil(requiredUnits / item.packageSize));
      const quantity = packages * item.packageSize;

      return {
        ...item,
        packages,
        amount: `${item.unit === "g" ? quantity.toLocaleString("pl-PL") : quantity} ${item.unit}`,
        price: Math.round(
          item.packagePrice * packages * priceMultiplier * modeMultiplier,
        ),
      };
    });
  }, [days, mode, people, shop]);

  const total = basket.reduce((sum, item) => sum + item.price, 0);
  const budgetValue = Number(budget) || 0;
  const budgetDifference = budgetValue - total;
  const costPerPerson = total / Number(people);
  const costPerPersonPerDay = total / (Number(people) * Number(days));
  const selectedMeals = useMemo<SuggestedMeal[]>(
    () =>
      mealTypes.map((mealType, index) => {
        const mealRecipes = recipes.filter((recipe) =>
          recipe.tags?.some((tag) =>
            mealType === "Śniadanie"
              ? tag.toLowerCase() === "śniadanie"
              : mealType === "Obiad"
                ? tag.toLowerCase() === "obiad"
                : tag.toLowerCase() === "przystawka" ||
                  tag.toLowerCase() === "kolacja",
          ),
        );

        return {
          ...(mealRecipes[index % Math.max(mealRecipes.length, 1)] ??
            recipes[index]),
          mealType,
        };
      }),
    [],
  );

  const aiImageUrl = useMemo(() => {
    const prompt = selectedMeals.map((meal) => meal.description).join(", ");
    return `https://image.pollinations.ai/prompt/${encodeURIComponent(
      `A bright editorial food photograph of a gluten-free meal plan: ${prompt}. Natural light, appetizing, overhead composition, no text`,
    )}?width=960&height=640&nologo=true&seed=${imageSeed}`;
  }, [imageSeed, selectedMeals]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCheckedItems([]);
    setImageSeed((seed) => seed + 1);
    setHasGenerated(true);
  };

  const toggleItem = (name: string) => {
    setCheckedItems((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name],
    );
  };

  return (
    <div className="basket-planner">
      <section className="basket-planner__intro">
        <span className="basket-planner__eyebrow">
          <FiShoppingBag /> PLANER POSIŁKÓW
        </span>
        <h1>Bezglutenowy koszyk zakupowy</h1>
        <p>
          Wybierz sklep, budżet i liczbę osób. Otrzymasz prostą listę zakupów
          oraz inspiracje na kilka dni.
        </p>
      </section>

      <form className="basket-planner__form" onSubmit={handleSubmit}>
        <label>
          Sklep
          <select
            value={shop}
            onChange={(event) => setShop(event.target.value)}
          >
            <option>Lidl</option>
            <option>Biedronka</option>
            <option>Dowolny sklep</option>
          </select>
        </label>
        <label>
          Budżet (zł)
          <input
            type="number"
            min="40"
            step="10"
            value={budget}
            onChange={(event) => setBudget(event.target.value)}
          />
        </label>
        <label>
          Dla
          <select
            value={people}
            onChange={(event) => setPeople(event.target.value)}
          >
            <option value="1">1 osoby</option>
            <option value="2">2 osób</option>
            <option value="3">3 osób</option>
            <option value="4">4 osób</option>
          </select>
        </label>
        <label>
          Na
          <select
            value={days}
            onChange={(event) => setDays(event.target.value)}
          >
            <option value="2">2 dni</option>
            <option value="3">3 dni</option>
            <option value="5">5 dni</option>
            <option value="7">7 dni</option>
          </select>
        </label>
        <label>
          Wariant cenowy
          <select
            value={mode}
            onChange={(event) => setMode(event.target.value)}
          >
            <option value="standard">Standardowy</option>
            <option value="economy">Ekonomiczny</option>
          </select>
        </label>
        <button type="submit">
          Stwórz koszyk <FiChevronRight />
        </button>
      </form>

      {hasGenerated && (
        <div className="basket-planner__results">
          <div className="basket-planner__summary">
            <div>
              <span className="basket-planner__eyebrow">TWÓJ PLAN</span>
              <h2>
                {shop}: zakupy na {days} dni
              </h2>
              <p>
                Lista dla {people} {people === "1" ? "osoby" : "osób"}. Ceny są
                orientacyjne i mogą różnić się między sklepami.
              </p>
              <div className="basket-planner__stats">
                <span>
                  <strong>{costPerPerson.toFixed(2)} zł</strong> / osoba
                </span>
                <span>
                  <strong>{costPerPersonPerDay.toFixed(2)} zł</strong> / osoba /
                  dzień
                </span>
              </div>
            </div>
            <div className="basket-planner__total">
              <strong>około {total} zł</strong>
              <span className={budgetDifference < 0 ? "is-over-budget" : ""}>
                {budgetDifference >= 0
                  ? `${budgetDifference.toFixed(2)} zł zostanie z budżetu`
                  : `${Math.abs(budgetDifference).toFixed(2)} zł ponad budżet`}
              </span>
            </div>
          </div>

          <div className="basket-planner__content">
            <div className="basket-planner__list">
              <h3>
                Lista zakupów{" "}
                <span>
                  {checkedItems.length}/{basket.length}
                </span>
              </h3>
              {basket.map((item) => {
                const checked = checkedItems.includes(item.name);
                return (
                  <button
                    key={item.name}
                    type="button"
                    className={`basket-item ${checked ? "is-checked" : ""}`}
                    onClick={() => toggleItem(item.name)}
                  >
                    <span className="basket-item__check">
                      {checked && <FiCheck />}
                    </span>
                    <span className="basket-item__name">
                      <strong>{item.name}</strong>
                      <small>
                        {item.amount} · {item.packages}{" "}
                        {packageWord(item.packages)} · {item.category}
                      </small>
                    </span>
                    <span className="basket-item__price">
                      około {item.price} zł
                    </span>
                  </button>
                );
              })}
            </div>
            <aside className="basket-planner__recipes">
              <span className="basket-planner__eyebrow">Z TEGO ZROBISZ</span>
              <h3>Plan dań</h3>
              <div className="basket-planner__ai-image">
                <div
                  className="basket-planner__ai-image-preview"
                  role="img"
                  aria-label="Zdjęcie wygenerowane przez AI dla sugerowanego planu dań"
                  style={{ backgroundImage: `url("${aiImageUrl}")` }}
                />
                <span>
                  <FiImage /> Zdjęcie wygenerowane przez AI
                </span>
              </div>
              {selectedMeals.map((meal) => (
                <Link
                  href={meal.href}
                  target="_blank"
                  key={`${meal.mealType}-${meal.id}-${meal.description}`}
                >
                  <span>
                    <small>{meal.mealType}</small>
                    {meal.description}
                  </span>
                  <FiChevronRight />
                </Link>
              ))}
              <Link
                className="basket-planner__all-recipes"
                href="/szukaj-przepisow"
              >
                Zobacz wszystkie przepisy <FiChevronRight />
              </Link>
            </aside>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingBasketPlanner;
