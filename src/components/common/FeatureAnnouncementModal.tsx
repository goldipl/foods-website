import { useEffect } from "react";
import Link from "next/link";
import { FiArrowRight, FiX } from "react-icons/fi";

type FeatureAnnouncementModalProps = {
  onClose: () => void;
};

const FeatureAnnouncementModal = ({
  onClose,
}: FeatureAnnouncementModalProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.classList.add("blocked-body");
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("blocked-body");
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="feature-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="feature-modal-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="feature-modal__content">
        <button
          className="feature-modal__close"
          type="button"
          aria-label="Zamknij informacje"
          onClick={onClose}
        >
          <FiX />
        </button>
        <div className="feature-modal__preview">
          <img
            src="/img/other/shopping-cart-preview.jpg"
            alt="Podgląd bezglutenowego koszyka zakupowego"
          />
        </div>
        <div className="feature-modal__body">
          <span className="feature-modal__eyebrow">NOWA FUNKCJONALNOŚĆ</span>
          <h2 id="feature-modal-title">Bezglutenowy koszyk zakupowy</h2>
          <p>
            Zaplanuj zakupy dopasowane do sklepu, budżetu, liczby osób i dni.
            Otrzymasz gotową listę produktów oraz inspiracje na przepisy.
          </p>
          <Link className="hero-cta" href="/koszyk-zakupowy">
            Zobacz koszyk <FiArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureAnnouncementModal;
