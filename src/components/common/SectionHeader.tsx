import React from "react";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

interface SectionHeaderProps {
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  id?: string;
  description?: React.ReactNode;
  action?: { href: string; label: string };
  align?: "left" | "center";
  theme?: "light" | "dark";
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  id,
  description,
  action,
  align = "left",
  theme = "light",
}) => (
  <div
    className={`section-header section-header--${align} section-header--${theme}`}
  >
    <div className="section-header__text">
      <span className="section-header__eyebrow">{eyebrow}</span>
      <h2 id={id}>{title}</h2>
      {description && <p>{description}</p>}
    </div>
    {action && (
      <Link className="section-header__action" href={action.href}>
        {action.label} <HiArrowRight aria-hidden="true" />
      </Link>
    )}
  </div>
);

export default SectionHeader;
