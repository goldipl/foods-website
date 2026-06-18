import React, { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiInstagram } from "react-icons/ci";

type Recipe = {
  id: number;
  href: string;
  imgSrc: any;
  altText: string;
  label?: string;
  labelClass?: string;
  tags?: string[];
  description: string;
};

interface Props {
  data: Recipe[];
}

const RecipeListWithSearch: React.FC<Props> = ({ data }) => {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<"newest" | "oldest">("newest");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(12);

  const inferTagsFromText = (text: string) => {
    const t = (text || "").toLowerCase();
    const tags: string[] = [];
    const map: [RegExp, string][] = [
      [/wega[nń]/i, "wegańskie"],
      [/wege/i, "wege"],
      [/bez\s?nabia/i, "bez nabiału"],
      [/airfry/i, "airfryer"],
      [/pizza/i, "pizza"],
      [/tortill/i, "tortilla"],
      [/makaron|spaghetti|tagliatelle|pasta/i, "makaron"],
      [/brownie|ciasto|deser|tiramisu|szarlotka|mazurek/i, "deser"],
      [/sniadan|śniad|jajk|omlet/i, "śniadanie"],
      [/burger|kotlet|bowl|zupa|pad thai|pho/i, "obiad"],
      [/salat|sałatka|salatka/i, "sałatka"],
    ];
    map.forEach(([re, tag]) => {
      if (re.test(t)) tags.push(tag);
    });
    return Array.from(new Set(tags));
  };

  const allTags = useMemo(() => {
    const s = new Set<string>();
    data.forEach((r) => {
      const fromData = r.tags || [];
      const inferred = inferTagsFromText(
        (r.description || "") + " " + (r.altText || ""),
      );
      (fromData.length ? fromData : inferred).forEach((t: string) => s.add(t));
    });
    return Array.from(s).sort();
  }, [data]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let arr = data.filter((r) => {
      if (q) {
        const matchesText =
          (r.description && r.description.toLowerCase().includes(q)) ||
          (r.altText && r.altText.toLowerCase().includes(q));
        if (!matchesText) return false;
      }
      if (selectedTags.length > 0) {
        const recipeTags =
          r.tags && r.tags.length
            ? r.tags
            : inferTagsFromText(
                (r.description || "") + " " + (r.altText || ""),
              );
        if (!selectedTags.every((t) => recipeTags.includes(t))) return false;
      }
      return true;
    });
    if (sort === "newest") return arr.slice().reverse();
    return arr.slice();
  }, [data, query, sort, selectedTags]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));

  const paginated = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, currentPage, pageSize]);

  useEffect(() => {
    setCurrentPage(1);
  }, [query, selectedTags, sort, pageSize]);

  return (
    <>
      <div className="recipes-controls">
        <div className="recipes-tags">
          {allTags.length > 0 && (
            <>
              <h3>Filtruj po tagach:</h3>
              <div className="recipes-tags-list">
                {allTags.map((tag) => (
                  <label key={tag} className="tag-checkbox">
                    <input
                      type="checkbox"
                      checked={selectedTags.includes(tag)}
                      onChange={(e) => {
                        if (e.target.checked)
                          setSelectedTags((s) => [...s, tag]);
                        else setSelectedTags((s) => s.filter((t) => t !== tag));
                      }}
                    />
                    <span>{tag}</span>
                  </label>
                ))}
                <button
                  type="button"
                  onClick={() => setSelectedTags([])}
                  className="clear-tags"
                >
                  Wyczyść
                </button>
              </div>
            </>
          )}
        </div>

        <div className="recipes-search">
          <input
            type="search"
            placeholder="Szukaj przepisów..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Szukaj przepisów"
          />
        </div>

        <div className="sort-pages-wrapper">
          <div className="recipes-sort">
            <label htmlFor="recipes-sort-select">Sortuj:</label>
            <select
              id="recipes-sort-select"
              value={sort}
              onChange={(e) => setSort(e.target.value as "newest" | "oldest")}
            >
              <option value="newest">Najnowsze</option>
              <option value="oldest">Najstarsze</option>
            </select>
          </div>

          <div className="pagination-size">
            <label>Na stronie:</label>
            <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
            >
              <option value={8}>8</option>
              <option value={12}>12</option>
              <option value={24}>24</option>
            </select>
          </div>
        </div>
      </div>

      <div className="listing-v1">
        {paginated.map((recipe) => (
          <Link
            key={recipe.id}
            href={recipe.href}
            className="listing-v1-slot"
            target="_blank"
          >
            <div className="listing-v1-slot__img">
              <Image
                src={recipe.imgSrc}
                alt={recipe.altText}
                width={400}
                height={500}
                loading="lazy"
              />
            </div>
            <div className="listing-v1-slot__text">
              <span>{recipe.description}</span>
            </div>
            <div className="listing-v1-slot__labels">
              {recipe.label && (
                <span className={recipe.labelClass || ""}>{recipe.label}</span>
              )}
            </div>
            <div className="listing-v1-slot__zoom">
              <div className="zoom-box">
                <CiInstagram />
                <span>Zobacz</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="recipes-pagination">
        <div className="pagination-info">
          <span>
            Wyświetlono{" "}
            {Math.min(
              filtered.length,
              (currentPage - 1) * pageSize + paginated.length,
            )}{" "}
            z {filtered.length} wyników
          </span>
        </div>

        {totalPages > 1 && (
          <div className="pagination-controls">
            <div className="pagination-buttons">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                ←
              </button>

              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  className={i + 1 === currentPage ? "active" : ""}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
              >
                →
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default RecipeListWithSearch;
