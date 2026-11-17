import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  HiArrowUpRight,
  HiCheck,
  HiOutlineSquare2Stack,
} from "react-icons/hi2";

const PROMO_CODES = [
  {
    discount: "-10%",
    code: "BEZGLUTENOWAKAROLA",
    shop: "Moncana",
    href: "https://moncana.pl/",
  },
  {
    discount: "-10%",
    code: "BEZGLUTENOWAKAROLA",
    shop: "Manufaktura Cukierków",
    href: "https://manufaktura-cukierkow.pl/",
  },
  {
    discount: "-10%",
    code: "karola10",
    shop: "Balviten Gluten Free",
    href: "https://sklep.balviten.com/pl",
  },
  {
    discount: "-20%",
    code: "BGKAROLA",
    shop: "Bezgluten",
    href: "https://bezgluten.pl/",
  },
];

const ROTATE_DELAY = 5000;
const COPIED_RESET_DELAY = 2000;

const Topbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // Tracked by index - the same code can be listed for more than one shop
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // On phones only one promo is visible at a time, so rotate them
  useEffect(() => {
    const timer = setInterval(
      () => setActiveIndex((index) => (index + 1) % PROMO_CODES.length),
      ROTATE_DELAY,
    );
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (copiedIndex === null) return;
    const timer = setTimeout(() => setCopiedIndex(null), COPIED_RESET_DELAY);
    return () => clearTimeout(timer);
  }, [copiedIndex]);

  const copyCode = async (code: string, index: number) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedIndex(index);
    } catch {
      // Clipboard unavailable (e.g. insecure context) - the code stays visible
    }
  };

  return (
    <div id="topbar" className="topbar">
      <div className="topbar__inner">
        {PROMO_CODES.map((promo, index) => {
          const isCopied = copiedIndex === index;

          return (
            <p
              key={`${promo.code}-${promo.shop}`}
              className={`topbar__promo ${index === activeIndex ? "is-active" : ""}`}
            >
              <span className="topbar__badge">{promo.discount}</span>
              <span className="topbar__label">z kodem</span>
              <button
                type="button"
                className={`topbar__code ${isCopied ? "is-copied" : ""}`}
                onClick={() => copyCode(promo.code, index)}
                aria-label={`Skopiuj kod ${promo.code}`}
              >
                {promo.code}
                {isCopied ? (
                  <HiCheck aria-hidden="true" />
                ) : (
                  <HiOutlineSquare2Stack aria-hidden="true" />
                )}
                <span className="topbar__copied" aria-live="polite">
                  {isCopied ? "Skopiowano!" : ""}
                </span>
              </button>
              <span className="topbar__label">w sklepie</span>
              <Link
                className="topbar__shop"
                href={promo.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {promo.shop}
                <HiArrowUpRight aria-hidden="true" />
              </Link>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Topbar;
