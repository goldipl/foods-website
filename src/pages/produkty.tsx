import "@/sass/main.scss";
import { useMemo, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  HiArrowRight,
  HiMagnifyingGlass,
  HiShoppingBag,
  HiSparkles,
} from "react-icons/hi2";
import { productsData } from "@/data/products/products";
import Topbar from "@/components/common/Topbar";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Pagination from "@/components/common/Pagination";

const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const products = useMemo(() => productsData.slice().reverse(), []);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedShop, setSelectedShop] = useState("");

  const shops = useMemo(
    () =>
      Array.from(
        new Set(products.map((product) => product.labelShop || product.label)),
      ).sort((firstShop, secondShop) =>
        firstShop.localeCompare(secondShop, "pl"),
      ),
    [products],
  );
  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLocaleLowerCase("pl-PL");

    return products.filter((product) => {
      const shop = product.labelShop || product.label;
      const matchesShop = !selectedShop || shop === selectedShop;
      const matchesSearch =
        !normalizedSearch ||
        [product.description, product.label, product.altText, shop]
          .join(" ")
          .toLocaleLowerCase("pl-PL")
          .includes(normalizedSearch);

      return matchesShop && matchesSearch;
    });
  }, [products, searchTerm, selectedShop]);

  const productsPerPage = 12;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage,
  );

  return (
    <>
      <Head>
        <title>Produkty Bezglutenowe | Bezglutenowa Karola</title>
        <meta
          name="description"
          content="Odkrywaj bezglutenowe produkty, nowości i przeglądy ze sklepów. Wyszukuj materiały o produktach i sprawdzaj źródła."
        />
      </Head>
      <header>
        <Topbar />
        <Header />
      </header>
      <main>
        <div className="products-page">
          <section
            className="products-page__hero"
            aria-labelledby="products-page-title"
          >
            <div
              className="products-page__orb products-page__orb--one"
              aria-hidden="true"
            />
            <div
              className="products-page__orb products-page__orb--two"
              aria-hidden="true"
            />
            <div className="products-page__hero-inner">
              <div className="products-page__hero-content">
                <span className="products-page__eyebrow">
                  <HiSparkles aria-hidden="true" /> Produkty i inspiracje
                </span>
                <h1 id="products-page-title">
                  Bezglutenowe
                  <span>odkrycia na co dzień</span>
                </h1>
                <p>
                  Przeglądaj nowości, produkty ze sklepów i materiały „Czy to ma
                  gluten?”. Wyszukaj markę lub sklep i przejdź do źródła, by
                  dowiedzieć się więcej.
                </p>
                <Link
                  className="products-page__hero-cta"
                  href="#lista-produktow"
                >
                  Odkryj produkty <HiArrowRight aria-hidden="true" />
                </Link>
                <div className="products-page__hero-note">
                  <HiShoppingBag aria-hidden="true" />
                  {products.length} materiałów do odkrycia
                </div>
              </div>

              <div className="products-page__hero-art" aria-hidden="true">
                <div className="products-page__hero-image">
                  <Image
                    src={products[0].imgSrc}
                    alt=""
                    fill
                    priority
                    sizes="(max-width: 760px) 80vw, 36vw"
                  />
                </div>
                <div className="products-page__art-chip products-page__art-chip--top">
                  <HiShoppingBag /> Nowości ze sklepów
                </div>
                <div className="products-page__art-chip products-page__art-chip--bottom">
                  <HiSparkles /> Odkrywaj sprawdzone inspiracje
                </div>
              </div>
            </div>
          </section>

          <section
            id="lista-produktow"
            className="products-page__listing"
            aria-labelledby="products-list-title"
          >
            <div className="products-page__listing-heading">
              <div>
                <span className="products-page__section-kicker">
                  Znajdź coś dla siebie
                </span>
                <h2 id="products-list-title">Produkty i przeglądy</h2>
              </div>
              <p>
                Szukaj po nazwie produktu lub wybierz sklep, aby szybciej
                odnaleźć interesujący Cię wpis.
              </p>
            </div>

            <div className="products-page__filters">
              <label className="products-page__search" htmlFor="product-search">
                <HiMagnifyingGlass aria-hidden="true" />
                <input
                  id="product-search"
                  type="search"
                  value={searchTerm}
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                    setCurrentPage(1);
                  }}
                  placeholder="Np. pieczywo, Lidl, Incola…"
                />
              </label>
              <label className="products-page__shop-filter" htmlFor="shop-filter">
                <span>Sklep lub marka</span>
                <select
                  id="shop-filter"
                  value={selectedShop}
                  onChange={(event) => {
                    setSelectedShop(event.target.value);
                    setCurrentPage(1);
                  }}
                >
                  <option value="">Wszystkie sklepy i marki</option>
                  {shops.map((shop) => (
                    <option key={shop} value={shop}>
                      {shop}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <p
              className="products-page__results-count"
              aria-live="polite"
              aria-atomic="true"
            >
              {filteredProducts.length === 1
                ? "1 materiał"
                : `${filteredProducts.length} materiałów`}
            </p>

            {paginatedProducts.length > 0 ? (
              <div className="products-page__grid">
                {paginatedProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={product.href}
                    className="products-page__card"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${product.description} — otwórz materiał na Instagramie`}
                  >
                    <div className="products-page__card-image">
                      <Image
                        src={product.imgSrc}
                        alt={product.altText}
                        width={480}
                        height={360}
                        loading="lazy"
                      />
                      <span className="products-page__card-label">
                        {product.labelShop || product.label}
                      </span>
                    </div>
                    <div className="products-page__card-content">
                      <h3>{product.description}</h3>
                      <span className="products-page__card-link">
                        Zobacz materiał <HiArrowRight aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="products-page__empty" role="status">
                <HiMagnifyingGlass aria-hidden="true" />
                <h3>Nie znaleźliśmy takich materiałów</h3>
                <p>
                  Zmień frazę lub wybierz „Wszystkie sklepy i marki”, aby
                  zobaczyć więcej.
                </p>
              </div>
            )}

            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}

            <p className="products-page__disclaimer">
              Skład i dostępność produktów mogą się zmieniać. Zawsze sprawdzaj
              aktualne opakowanie i informacje producenta — wpisy na stronie
              mają charakter informacyjny.
            </p>
          </section>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default ProductsPage;
