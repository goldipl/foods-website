import Link from "next/link";
import { PiCookingPot } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { LiaShoppingBasketSolid } from "react-icons/lia";
import { HiArrowRight } from "react-icons/hi2";

export const BoxesInfoItems = [
  {
    icon: PiCookingPot,
    theme: "recipes",
    title: "Przepisy bezglutenowe",
    subtitle: "Szybkie i zdrowe przepisy na każdą okazję",
    href: "#sniadania",
    label: "Zobacz przepisy",
  },
  {
    icon: IoLocationOutline,
    theme: "places",
    title: "Restauracje bez glutenu",
    subtitle: "Sprawdź lokale w Twojej okolicy",
    href: "/bezglutenowe-miejsca",
    label: "Znajdź restauracje",
  },
  {
    icon: LiaShoppingBasketSolid,
    theme: "products",
    title: "Bezglutenowe produkty",
    subtitle: "Polecane bezglutenowe produkty",
    href: "#produkty",
    label: "Zobacz produkty",
  },
];

const BoxesInfoSection = () => {
  return (
    <section id="boxes-info-section" className="boxes-info-section">
      <div className="boxes-info-wrapper">
        <div className="boxes-info">
          {BoxesInfoItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`boxes-info-slot boxes-info-slot--${item.theme}`}
              >
                <div className="boxes-info-slot__top">
                  <span className="boxes-info-slot__icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <span className="boxes-info-slot__number" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="boxes-info-slot__text">
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>

                <div className="boxes-info-slot__cta">
                  <span>{item.label}</span>
                  <span className="boxes-info-slot__arrow" aria-hidden="true">
                    <HiArrowRight />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BoxesInfoSection;
