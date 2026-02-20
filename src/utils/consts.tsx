import { StaticImageData } from "next/image";

// --- ICON IMPORTS ---
import logo from "../../public/icons/header/bezglutenowakarola-logo.svg";
import menuDownIcon from "../../public/icons/common/menu-down-icon.svg";
import instagramIcon from "../../public/icons/common/instagram.svg";
import youTubeIcon from "../../public/icons/common/youtube.svg";
import facebookIcon from "../../public/icons/common/facebook.svg";
import mapIcon from "../../public/img/map/map-icon.png";

// --- HERO SLIDE IMPORTS ---
import welcomeImg from "../../public/img/welcome/karola-dynia.jpg";
import breakfastImg from "../../public/img/recipes/breakfasts/003_sniadaniowa_tortilla_z_jajkiem.jpg";
import dinnerImg from "../../public/img/recipes/dinners/004_bezglutenowy_burger_z_kurczaka_teriyaki.jpg";
import dessertImg from "../../public/img/recipes/desserts/004_wege_sernik.jpg";
import pierogi from "../../public/img/products/022_bezglutenowe_panettone.jpg";
import pastaGlutenFreeRoma from "../../public/img/welcome/wloski-makaron-gluten-free.jpg";
import saskaSushiWarszawa from "../../public/img/restaurants/poland/001_saska_sushi.jpg";
import bezglutenoweHalloween from "../../public/img/events/011_bezglutenowe_halloween.jpg";
import glutenFreeHeroMap from "../../public/img/map/gluten-free-hero-map.jpg";

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
  grid?: boolean;
  className?: string;
}

export interface HeaderSocialLink {
  label: string;
  icon: string | StaticImageData;
  href: string;
  handle: string;
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
  reverse?: boolean;
}

export interface PartnerItem {
  name: string;
  href: string;
  src: StaticImageData;
}

// --- NAVIGATION DATA ---

export const HEADER_ICONS = {
  logo,
  menuDownIcon,
};

export const HEADER_NAV_ITEMS: HeaderNavItem[] = [
  {
    label: "Przepisy",
    children: [
      { label: "Śniadania", href: "/#sniadania" },
      { label: "Obiady", href: "/#obiady" },
      { label: "Desery", href: "/#desery" },
      { label: "Przystawki / Przekąski / Sałatki", href: "/#przystawki" },
    ],
  },
  {
    label: "Restauracje",
    children: [
      {
        label: "Polska",
        children: [
          { label: "Warszawa", href: "/#restauracje-polska" },
          { label: "Trójmiasto", href: "/#restauracje-polska" },
          { label: "Kraków", href: "/#restauracje-polska" },
          { label: "Kielce", href: "/#restauracje-polska" },
          { label: "Zakopane", href: "/#restauracje-polska" },
        ],
      },
      {
        label: "Europa",
        children: [
          { label: "Włochy", href: "/#restauracje-europa" },
          { label: "Cypr", href: "/#restauracje-europa" },
          { label: "Rumunia", href: "/#restauracje-europa" },
        ],
      },
      { label: "Mapa miejsc bezglutenowych", href: "/bezglutenowe-miejsca" },
    ],
  },
  {
    label: "Produkty",
    grid: true,
    children: [
      { label: "Putka bez glutenu", href: "/#produkty" },
      { label: "Tymbark Just Plants", href: "/#produkty" },
      { label: "Czapielskie Pudełka", href: "/#produkty" },
      { label: "Vallongo Tradizione Italiana", href: "/#produkty" },
      { label: "Biedronka", href: "/#produkty" },
      { label: "Stokrotka", href: "/#produkty" },
      { label: "Żabka", href: "/#produkty" },
      { label: "Incola", href: "/#produkty" },
      { label: "Glutenex", href: "/#produkty" },
      { label: "Cucina Gluten Free", href: "/#produkty" },
      { label: "Sadvit", href: "/#produkty" },
      { label: "Inne", href: "/#produkty" },
    ],
  },
  {
    label: "Celiakia (co dalej?)",
    children: [
      {
        label: "Podstawowe informacje",
        href: "/#celiakia-podstawowe-informacje",
      },
      {
        label: "Pierwsze kroki po diagnozie",
        href: "/#pierwsze-kroki-po-diagnozie",
      },
      { label: "Jak wygląda życie z celiakią?", href: "/#video" },
    ],
  },
  { label: "O mnie", href: "/#o-mnie" },
  { label: "Kontakt", href: "/#kontakt", className: "contact" },
];

export const HEADER_SOCIAL_LINKS: HeaderSocialLink[] = [
  {
    label: "Instagram",
    icon: instagramIcon,
    href: "https://www.instagram.com/bezglutenowakarola/",
    handle: "@bezglutenowakarola",
  },
  {
    label: "YouTube",
    icon: youTubeIcon,
    href: "https://www.youtube.com/@bezglutenowakarola",
    handle: "@bezglutenowakarola",
  },
  {
    label: "Facebook",
    icon: facebookIcon,
    href: "https://www.facebook.com/profile.php?id=61576336200554",
    handle: "@bezglutenowakarola",
  },
  {
    label: "Mapa",
    icon: mapIcon,
    href: "/bezglutenowe-miejsca",
    handle: "Mapa miejsc",
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

export const HERO_SLIDES: HeroSlideItem[] = [
  {
    title: "Zdrowo, smacznie, bezglutenowo!",
    subtitle: "Przepisy, restauracje i porady dla osób na diecie bezglutenowej",
    image: welcomeImg,
    alt: "Restauracja Rola Pao w Warszawie",
    links: [
      { label: "Przepisy", href: "#sniadania" },
      {
        label: "Poradniki",
        href: "#celiakia-podstawowe-informacje",
        className: "white",
      },
    ],
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
    title: "Bezglutenowe śniadania",
    subtitle:
      "Szukasz pomysłów na śniadania bezglutenowe, które są nie tylko zdrowe, ale i pyszne? Dobrze trafiłeś!",
    image: breakfastImg,
    alt: "Bezglutenowa śniadaniowa tortilla z komosy ryżowej",
    reverse: true,
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
    reverse: true,
    links: [{ label: "Sprawdź przepisy", href: "#desery" }],
  },
  {
    title: "Bezglutenowe restauracje w Polsce",
    subtitle:
      "Szukasz miejsc, gdzie możesz zjeść pysznie i bez glutenu w Polsce? Oto moje rekomendacje!",
    image: saskaSushiWarszawa,
    alt: "Saska Sushi",
    links: [{ label: "Sprawdź", href: "#restauracje-polska" }],
  },
  {
    title: "Bezglutenowe restauracje na świecie",
    subtitle:
      "Szukasz miejsc, gdzie możesz zjeść pysznie i bez glutenu na świecie? Oto moje rekomendacje!",
    image: pastaGlutenFreeRoma,
    alt: "Restauracja Mama Eat, Włochy",
    reverse: true,
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
    links: [{ label: "Sprawdź", href: "#wydarzenia" }],
  },
];
