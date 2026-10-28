import { StaticImageData } from "next/image";
import { IconType } from "react-icons";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { HiMagnifyingGlass, HiOutlineMapPin } from "react-icons/hi2";

// --- ICON IMPORTS ---
import logo from "../../public/icons/header/bezglutenowakarola-logo.svg";

// --- HERO SLIDE IMPORTS ---
import breakfastImg from "../../public/img/recipes/breakfasts/003_sniadaniowa_tortilla_z_jajkiem.jpg";
import dinnerImg from "../../public/img/recipes/dinners/004_bezglutenowy_burger_z_kurczaka_teriyaki.jpg";
import dessertImg from "../../public/img/recipes/desserts/004_wege_sernik.jpg";
import pierogi from "../../public/img/products/022_bezglutenowe_panettone.jpg";
import pastaGlutenFreeRoma from "../../public/img/welcome/wloski-makaron-gluten-free.jpg";
import saskaSushiWarszawa from "../../public/img/restaurants/poland/001_saska_sushi.jpg";
import bezglutenoweHalloween from "../../public/img/events/011_bezglutenowe_halloween.jpg";
import karolaHero from "../../public/img/hero/karola-hero.jpg";
import glutenFreeHeroMap from "../../public/img/hero/glutenfreemap.jpg";
import searchPage from "../../public/img/hero/searchpage.jpg";
import articlesPage from "../../public/img/hero/articles.jpg";
import mealPlannerHero from "../../public/img/hero/meal-planner.jpg";
import gamesHero from "../../public/img/hero/games-page.jpg";

// --- PARTNER IMPORTS ---
import GlutenexImg from "../../public/img/cooperation/glutenex.png";
import IncolaImg from "../../public/img/cooperation/incola.jpg";
import BezglutenImg from "../../public/img/cooperation/bezgluten.png";
import BalvitenImg from "../../public/img/cooperation/balviten.jpg";
import VallongoImg from "../../public/img/cooperation/vallongo.jpg";
import MoncanaImg from "../../public/img/cooperation/moncana.png";
import PutkaBezGlutenuImg from "../../public/img/cooperation/putka-bez-glutenu.png";

// --- INTERFACES ---

export interface HeaderNavItem {
  label: string;
  href?: string;
  children?: HeaderNavItem[];
  className?: string;
}

export interface HeaderSocialLink {
  label: string;
  icon: IconType;
  href: string;
  target: string;
  handle: string;
  theme: "instagram" | "facebook" | "search" | "map";
}

export interface SlideLink {
  label: string;
  href: string;
  className?: string;
}

export interface HeroSlideItem {
  title: string;
  subtitle: string;
  image: StaticImageData;
  alt: string;
  links: SlideLink[];
}

export interface PartnerItem {
  name: string;
  href: string;
  src: StaticImageData;
}

// --- NAVIGATION DATA ---

export const HEADER_ICONS = {
  logo,
};

export const HEADER_NAV_ITEMS: HeaderNavItem[] = [
  {
    label: "Przepisy",
    children: [
      { label: "Śniadania", href: "/sniadania" },
      { label: "Obiady", href: "/obiady" },
      { label: "Desery", href: "/desery" },
      { label: "Przystawki / Przekąski / Sałatki", href: "/przekaski" },
    ],
  },
  {
    label: "Narzędzia",
    children: [
      { label: "Bezglutenowy planer posiłków", href: "/planer-posilkow" },
      { label: "Wyszukiwarka przepisów", href: "/szukaj-przepisow" },
      { label: "Mapa miejsc bezglutenowych", href: "/bezglutenowe-miejsca" },
    ],
  },
  {
    label: "Miejsca",
    children: [
      {
        label: "Restauracje/cukiernie w Polsce",
        href: "/restauracje-w-polsce",
      },
      {
        label: "Restauracje/cukiernie w Europie",
        href: "/restauracje-w-europie",
      },
      {
        label: "Hotele i pensjonaty",
        href: "/hotele",
      },
    ],
  },
  { label: "Produkty", href: "/produkty" },
  {
    label: "Celiakia (co dalej?)",
    children: [
      {
        label: "Artykuły",
        href: "/artykuly",
      },
      {
        label: "Podstawowe informacje",
        href: "/#celiakia-podstawowe-informacje",
      },
      {
        label: "Pierwsze kroki po diagnozie",
        href: "/#pierwsze-kroki-po-diagnozie",
      },
      { label: "Jak wygląda życie z celiakią? (podcast)", href: "/#video" },
      {
        label: "Wydarzenia, warsztaty bezglutenowe i przydatne informacje",
        href: "/wydarzenia",
      },
      {
        label: "Bezglutenowe marki - współpraca",
        href: "/#wspolpraca",
      },
    ],
  },
  {
    label: "O stronie",
    children: [
      { label: "O mnie", href: "/#o-mnie" },
      { label: "Kontakt", href: "/#kontakt", className: "contact" },
    ],
  },
  { label: "Gry", href: "/gry" },
];

export const HEADER_SOCIAL_LINKS: HeaderSocialLink[] = [
  {
    label: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/bezglutenowakarola/",
    target: "_blank",
    handle: "@bezglutenowakarola",
    theme: "instagram",
  },
  {
    label: "Facebook",
    icon: FaFacebookF,
    href: "https://www.facebook.com/profile.php?id=61576336200554",
    target: "_blank",
    handle: "@bezglutenowakarola",
    theme: "facebook",
  },
  {
    label: "Wyszukiwarka przepisów",
    icon: HiMagnifyingGlass,
    href: "/szukaj-przepisow/",
    target: "_self",
    handle: "Wyszukiwarka przepisów",
    theme: "search",
  },
  {
    label: "Mapa miejsc bezglutenowych",
    icon: HiOutlineMapPin,
    href: "/bezglutenowe-miejsca",
    target: "_self",
    handle: "Mapa miejsc bezglutenowych",
    theme: "map",
  },
];

// --- CONTENT DATA ---

export const PARTNERS: PartnerItem[] = [
  { name: "Glutenex", href: "https://glutenex.pl/", src: GlutenexImg },
  { name: "Bezgluten", href: "https://bezgluten.pl/", src: BezglutenImg },
  {
    name: "Putka bez glutenu",
    href: "https://www.putka.pl/produkty/produkty-bezglutenowe/",
    src: PutkaBezGlutenuImg,
  },
  { name: "Incola", href: "https://www.incola.com.pl/", src: IncolaImg },
  { name: "Balviten", href: "https://balviten.com/", src: BalvitenImg },
  { name: "Vallongo", href: "https://vallongo.it/pl-pl", src: VallongoImg },
  { name: "Moncana", href: "https://moncana.pl/", src: MoncanaImg },
];

export interface GameSectionItem {
  title: string;
  description: string;
  href: string;
  icon: string;
  badge: string;
  label: string;
  featured?: boolean;
}

export const GAMES_SECTION_ITEMS: GameSectionItem[] = [
  {
    title: "Łap bezglutenowe produkty",
    description:
      "Zbieraj zdrowe smakołyki i sprawdzaj, ile punktów uda Ci się zdobyć na jedną rundę.",
    href: "/gra-lapacz",
    icon: "🧺",
    badge: "Ruch",
    label: "Zagraj teraz",
  },
  {
    title: "Snake",
    description:
      "Wybierz kierunek, jedz dalej i zdobywaj coraz lepsze wyniki w tej klasycznej grze.",
    href: "/gra-snake",
    icon: "🐍",
    badge: "Klasyk",
    label: "Wejdź do gry",
  },
  {
    title: "Bezglutenowy quiz",
    description:
      "Sprawdź swoją wiedzę o produktach, składnikach i zdrowych wyborach bez glutenu.",
    href: "/gra-quiz",
    icon: "❓",
    badge: "Wiedza",
    label: "Sprawdź się",
  },
  {
    title: "Wyścig",
    description:
      "Zmieniaj pasy, omijaj pachołki i zbieraj bezglutenowe kromki. Ile punktów zdobędziesz w 60 sekund?",
    href: "/gra-wyscig",
    icon: "🏁",
    badge: "Wyzwanie",
    label: "Start",
  },
  {
    title: "Karola i bezglutenowa kraina",
    description:
      "Skacz po platformach, zbieraj złote ziarenka i pokonaj pięć coraz trudniejszych poziomów.",
    href: "/gra-karola",
    icon: "🌾",
    badge: "Platformówka",
    label: "Wyrusz w drogę",
    featured: true,
  },
];

export const HERO_SLIDES: HeroSlideItem[] = [
  {
    title: "Zdrowo, smacznie, bezglutenowo!",
    subtitle: "Przepisy, restauracje i porady dla osób na diecie bezglutenowej",
    image: karolaHero,
    alt: "Karola – autorka bloga Bezglutenowa Karola",
    links: [
      { label: "Przepisy", href: "#sniadania" },
      {
        label: "Porady",
        href: "/artykuly",
        className: "white",
      },
    ],
  },
  {
    title: "Bezglutenowy planer posiłków",
    subtitle:
      "Zaplanuj posiłki na cały tydzień i odkryj sprawdzone, bezglutenowe przepisy",
    image: mealPlannerHero,
    alt: "Ilustracja tygodniowego planera posiłków z propozycjami dań",
    links: [{ label: "Zaplanuj posiłki", href: "/planer-posilkow" }],
  },
  {
    title: "Wyszukiwarka przepisów bezglutenowych",
    subtitle:
      "Baza bezpiecznych i smacznych przepisów bez glutenu, sprawdzonych osobiście przeze mnie",
    image: searchPage,
    alt: "Wyszukiwarka przepisów bezglutenowych",
    links: [{ label: "Sprawdź", href: "/szukaj-przepisow" }],
  },
  {
    title: "Mapa miejsc bezglutenowych",
    subtitle:
      "Restauracje, kawiarnie, cukiernie bez glutenu w Polsce i na świecie sprawdzone osobiście przeze mnie",
    image: glutenFreeHeroMap,
    alt: "Mapa miejsc bezglutenowych",
    links: [{ label: "Sprawdź", href: "/bezglutenowe-miejsca" }],
  },
  {
    title: "Artykuły o diecie bezglutenowej",
    subtitle:
      "Znajdziesz tu praktyczne teksty, które pomogą Ci bezpiecznie przejść na dietę bezglutenową. Od pierwszych zakupów po codzienne gotowanie i podróże",
    image: articlesPage,
    alt: "Artykuły o diecie bezglutenowej",
    links: [{ label: "Czytaj", href: "/artykuly" }],
  },
  {
    title: "Gry dla każdego",
    subtitle:
      "Zrób sobie chwilę przerwy i wybierz jedną z gier przygotowanych dla Ciebie",
    image: gamesHero,
    alt: "Ilustracja kontrolera do bezglutenowych gier",
    links: [{ label: "Zagraj teraz", href: "/gry" }],
  },
  {
    title: "Bezglutenowe śniadania",
    subtitle:
      "Szukasz pomysłów na śniadania bezglutenowe, które są nie tylko zdrowe, ale i pyszne? Dobrze trafiłeś!",
    image: breakfastImg,
    alt: "Bezglutenowa śniadaniowa tortilla z komosy ryżowej",
    links: [{ label: "Sprawdź przepisy", href: "#sniadania" }],
  },
  {
    title: "Bezglutenowe obiady",
    subtitle:
      "Szukasz inspiracji na obiady bezglutenowe, które będą nie tylko zdrowe, ale też naprawdę pyszne? Świetnie trafiłeś!",
    image: dinnerImg,
    alt: "Kurczako-burger Teriyaki",
    links: [{ label: "Sprawdź przepisy", href: "#obiady" }],
  },
  {
    title: "Bezglutenowe desery",
    subtitle:
      "Marzysz o pysznych deserach bezglutenowych, które zachwycą smakiem, a przy tym będą lekkie i zdrowe? Jesteś we właściwym miejscu!",
    image: dessertImg,
    alt: "Wege sernik",
    links: [{ label: "Sprawdź przepisy", href: "#desery" }],
  },
  {
    title: "Bezglutenowe restauracje i cukiernie w Polsce",
    subtitle:
      "Szukasz miejsc, gdzie możesz zjeść pysznie i bez glutenu w Polsce? Oto moje rekomendacje!",
    image: saskaSushiWarszawa,
    alt: "Saska Sushi",
    links: [{ label: "Sprawdź", href: "#restauracje-polska" }],
  },
  {
    title: "Bezglutenowe restauracje i cukiernie na świecie",
    subtitle:
      "Szukasz miejsc, gdzie możesz zjeść pysznie i bez glutenu na świecie? Oto moje rekomendacje!",
    image: pastaGlutenFreeRoma,
    alt: "Restauracja Mama Eat, Włochy",
    links: [{ label: "Sprawdź", href: "#restauracje-europa" }],
  },
  {
    title: 'Bezglutenowe produkty - "Czy to ma gluten?"',
    subtitle:
      "Sprawdzone produkty bezglutenowe, które warto mieć w swojej kuchni i w codziennym życiu",
    image: pierogi,
    alt: "Czy to ma gluten?",
    links: [{ label: "Sprawdź", href: "#produkty" }],
  },
  {
    title: "Bezglutenowe wydarzenia",
    subtitle:
      "Bezglutenowe eventy, warsztaty i spotkania dla osób na diecie bezglutenowej",
    image: bezglutenoweHalloween,
    alt: "Bezglutenowe wydarzenia",
    links: [{ label: "Sprawdź", href: "/wydarzenia" }],
  },
];

// --- FOOTER ---

export const FOOTER_LINKS = [
  {
    title: "Przepisy",
    links: [
      { label: "Śniadania", href: "/sniadania" },
      { label: "Obiady", href: "/obiady" },
      { label: "Desery / Słodkości", href: "/desery" },
      { label: "Przystawki / Przekąski / Sałatki", href: "/przekaski" },
      { label: "Wyszukiwarka przepisów", href: "/szukaj-przepisow" },
    ],
  },
  {
    title: "Miejsca",
    links: [
      { label: "Restauracje w Polsce", href: "/restauracje-w-polsce" },
      { label: "Restauracje w Europie", href: "/restauracje-w-europie" },
      { label: "Hotele i pensjonaty", href: "/hotele" },
      { label: "Mapa miejsc bezglutenowych", href: "/bezglutenowe-miejsca" },
    ],
  },
  {
    title: "Produkty",
    links: [
      { label: "Lidl", href: "/produkty" },
      { label: "Biedronka", href: "/produkty" },
      { label: "Stokrotka", href: "/produkty" },
      { label: "Aldi", href: "/produkty" },
      { label: "Kaufland", href: "/produkty" },
      { label: "Żabka", href: "/produkty" },
      { label: "Carrefour", href: "/produkty" },
      { label: "Half Price", href: "/produkty" },
      { label: "Inne", href: "/produkty" },
    ],
  },
  {
    title: "Celiakia (co dalej?)",
    links: [
      {
        label: "Artykuły",
        href: "/artykuly",
      },
      {
        label: "Podstawowe informacje",
        href: "/#celiakia-podstawowe-informacje",
      },
      {
        label: "Pierwsze kroki po diagnozie",
        href: "/#pierwsze-kroki-po-diagnozie",
      },
      { label: "Jak wygląda życie z celiakią? (podcast)", href: "/#video" },
      {
        label: "Wydarzenia, warsztaty bezglutenowe i przydatne informacje",
        href: "/wydarzenia",
      },
      {
        label: "Bezglutenowe marki - współpraca",
        href: "/#wspolpraca",
      },
    ],
  },
  {
    title: "Dodatkowe informacje",
    links: [
      { label: "O mnie", href: "#o-mnie" },
      { label: "Kontakt", href: "#kontakt" },
      {
        label: "Instagram",
        href: "https://www.instagram.com/bezglutenowakarola/",
        isExternal: true,
      },
      {
        label: "YouTube",
        href: "https://www.youtube.com/@bezglutenowakarola/",
        isExternal: true,
      },
      {
        label: "Facebook",
        href: "https://www.facebook.com/profile.php?id=61576336200554",
        isExternal: true,
      },
    ],
  },
];

export const BRAND_DATA = {
  description:
    "Nazywam się Karolina Wontorska-Godlewska i zapraszam Cię do mojego bezglutenowego świata.",
  copy: "@BezglutenowaKarola",
  author: "mgodlewskidev.pl",
  authorHref: "https://mgodlewskidev.pl/",
};
