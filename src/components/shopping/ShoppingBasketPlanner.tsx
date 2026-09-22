import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { FiCheck, FiChevronRight, FiShoppingBag } from "react-icons/fi";
import { appetizersRecipesData } from "@/data/recipes/appetizers-recipes";
import { breakfastsRecipesData } from "@/data/recipes/breakfasts-recipes";
import { dessertsRecipesData } from "@/data/recipes/desserts-recipes";
import { dinnersRecipesData } from "@/data/recipes/dinners-recipes";

type Recipe = {
  id: number;
  href: string;
  description: string;
  tags?: string[];
};

type BasketItem = {
  name: string;
  amount: string;
  price: number;
  category: string;
};

const baseBasket: BasketItem[] = [
  {
    name: "Chleb bezglutenowy",
    amount: "1 bochenek",
    price: 12,
    category: "Śniadania",
  },
  { name: "Jajka", amount: "10 szt.", price: 15, category: "Śniadania" },
  { name: "Kurczak", amount: "około 600 g", price: 26, category: "Obiady" },
  { name: "Pomidory", amount: "6 szt.", price: 10, category: "Warzywa" },
  { name: "Mozzarella", amount: "2 kulki", price: 12, category: "Nabiał" },
  { name: "Ryż", amount: "1 opakowanie", price: 8, category: "Obiady" },
  { name: "Jogurt naturalny", amount: "2 szt.", price: 7, category: "Nabiał" },
  {
    name: "Przekąska bezglutenowa",
    amount: "1 opakowanie",
    price: 9,
    category: "Przekąski",
  },
  {
    name: "Warzywa do sałatki",
    amount: "1 zestaw",
    price: 12,
    category: "Warzywa",
  },
  {
    name: "Oliwa i przyprawy",
    amount: "zapas domowy",
    price: 8,
    category: "Spiżarnia",
  },
];

const recipes: Recipe[] = [
  ...(breakfastsRecipesData as Recipe[]),
  ...(dinnersRecipesData as Recipe[]),
  ...(appetizersRecipesData as Recipe[]),
  ...(dessertsRecipesData as Recipe[]),
];

const recipeMatches = [
  "jajka",
  "kurczak",
  "pomidor",
  "ryż",
  "mozzarella",
  "jogurt",
  "chleb",
  "sałatka",
];

const ShoppingBasketPlanner = () => {
  const [shop, setShop] = useState("Lidl");
  const [budget, setBudget] = useState("150");
  const [people, setPeople] = useState("2");
  const [days, setDays] = useState("3");
  const [hasGenerated, setHasGenerated] = useState(false);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const basket = useMemo(() => {
    const scale = Math.max(
      0.65,
      Math.min(1.3, ((Number(people) / 2) * Number(days)) / 3),
    );
    const target = Number(budget) || 150;
    const itemCount =
      target < 100
        ? 7
        : target < 140
          ? 8
          : target < 190
            ? 10
            : baseBasket.length;

    return baseBasket.slice(0, itemCount).map((item) => ({
      ...item,
      amount:
        scale === 1
          ? item.amount
          : `${item.amount} (${scale > 1 ? "więcej" : "mniej"})`,
      price: Math.round(item.price * scale),
    }));
  }, [budget, days, people]);

  const total = basket.reduce((sum, item) => sum + item.price, 0);
  const selectedRecipes = useMemo(() => {
    const matchingRecipes = recipes.filter((recipe) =>
      recipe.tags?.some((tag) => recipeMatches.includes(tag.toLowerCase())),
    );
    return matchingRecipes.slice(0, 3);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCheckedItems([]);
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
            <option>Carrefour</option>
            <option>Kaufland</option>
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
            </div>
            <div className="basket-planner__total">
              <strong>około {total} zł</strong>
              <span>z budżetu {budget} zł</span>
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
                        {item.amount} · {item.category}
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
              <h3>Pomysły na przepisy</h3>
              {selectedRecipes.map((recipe) => (
                <Link
                  href={recipe.href}
                  target="_blank"
                  key={`${recipe.id}-${recipe.description}`}
                >
                  <span>{recipe.description}</span>
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
