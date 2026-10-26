import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  HiArrowUpRight,
  HiCheck,
  HiOutlineSquare2Stack,
} from "react-icons/hi2";

const PROMO_CODES = [
  {
    code: "BEZGLUTENOWAKAROLA",
    shop: "Moncana",
    href: "https://moncana.pl/",
  },
  {
    code: "karola10",
    shop: "Balviten Gluten Free",
    href: "https://sklep.balviten.com/pl",
  },
];

const ROTATE_DELAY = 5000;
const COPIED_RESET_DELAY = 2000;

const Topbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // On phones only one promo is visible at a time, so rotate them
  useEffect(() => {
    const timer = setInterval(
      () => setActiveIndex((index) => (index + 1) % PROMO_CODES.length),
      ROTATE_DELAY,
    );
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!copiedCode) return;
    const timer = setTimeout(() => setCopiedCode(null), COPIED_RESET_DELAY);
    return () => clearTimeout(timer);
  }, [copiedCode]);

  const copyCode = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
    } catch {
      // Clipboard unavailable (e.g. insecure context) - the code stays visible
    }
  };

  return (
    <div id="topbar" className="topbar">
      <div className="topbar__inner">
        {PROMO_CODES.map((promo, index) => {
          const isCopied = copiedCode === promo.code;

          return (
            <p
              key={promo.code}
              className={`topbar__promo ${index === activeIndex ? "is-active" : ""}`}
            >
              <span className="topbar__badge">-10%</span>
              <span className="topbar__label">z kodem</span>
              <button
                type="button"
                className={`topbar__code ${isCopied ? "is-copied" : ""}`}
                onClick={() => copyCode(promo.code)}
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
