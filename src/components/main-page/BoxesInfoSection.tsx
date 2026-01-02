import { PiCookingPot } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { LiaShoppingBasketSolid } from "react-icons/lia";
import Link from "next/link";
import { HiChevronRight } from "react-icons/hi2";


const BoxesInfoSection = () => {
  return (
    <section id="boxes-info-section" className="boxes-info-section">
      <div className="boxes-info-wrapper">
        <div className="boxes-info">
          {/* Slot */}
          <div className="boxes-info-slot">
            <div className="boxes-info-slot__icon">
              <PiCookingPot size={40} />
            </div>
            <div className="boxes-info-slot__text">
              <h3>Przepisy bezglutenowe</h3>
              <h4>Szybkie i zdrowe przepisy na każdą okazję</h4>
            </div>
            <div className="boxes-info-slot__link">
              <Link href="#sniadania">Zobacz przepisy <HiChevronRight /></Link>
            </div>
          </div>
          {/* Slot */}
          <div className="boxes-info-slot">
            <div className="boxes-info-slot__icon">
              <IoLocationOutline size={40} />
            </div>
            <div className="boxes-info-slot__text">
              <h3>Resturacje bez glutenu</h3>
              <h4>Sprawdź lokale w Twojej okolicy</h4>
            </div>
            <div className="boxes-info-slot__link">
              <Link href="/bezglutenowe-miejsca">Znajdź restauracje <HiChevronRight /></Link>
            </div>
          </div>
          {/* Slot */}
          <div className="boxes-info-slot">
            <div className="boxes-info-slot__icon">
              <LiaShoppingBasketSolid size={40} />
            </div>
            <div className="boxes-info-slot__text">
              <h3>Ulubione produkty</h3>
              <h4>Polecane bezglutenowe produkty</h4>
            </div>
            <div className="boxes-info-slot__link">
              <Link href="#produkty">Zobacz produkty <HiChevronRight /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoxesInfoSection;
