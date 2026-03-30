import Link from "next/link";
import { PiCookingPot } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { LiaShoppingBasketSolid } from "react-icons/lia";
import { HiChevronRight } from "react-icons/hi2";

export const BoxesInfoItems = [
  {
    icon: PiCookingPot,
    title: "Przepisy bezglutenowe",
    subtitle: "Szybkie i zdrowe przepisy na każdą okazję",
    href: "#sniadania",
    label: "Zobacz przepisy",
  },
  {
    icon: IoLocationOutline,
    title: "Resturacje bez glutenu",
    subtitle: "Sprawdź lokale w Twojej okolicy",
    href: "/bezglutenowe-miejsca",
    label: "Znajdź restauracje",
  },
  {
    icon: LiaShoppingBasketSolid,
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
                key={index}
                href={item.href}
                className="boxes-info-slot group"
              >
                <div className="boxes-info-slot__icon">
                  <Icon size={40} />
                </div>

                <div className="boxes-info-slot__text">
                  <h3>{item.title}</h3>
                  <h4>{item.subtitle}</h4>
                </div>

                <div className="boxes-info-slot__cta">
                  <span>{item.label}</span>
                  <HiChevronRight className="transition-transform group-hover:translate-x-1" />
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
