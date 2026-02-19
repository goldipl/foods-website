import { StaticImageData } from "next/image";

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
import Glutenex from "../../public/img/cooperation/glutenex.png";
import Incola from "../../public/img/cooperation/incola.jpg";
import Bezgluten from "../../public/img/cooperation/bezgluten.png";
import Balviten from "../../public/img/cooperation/balviten.jpg";
import Vallongo from "../../public/img/cooperation/vallongo.jpg";
import Moncana from "../../public/img/cooperation/moncana.png";
import PutkaBezGlutenu from "../../public/img/cooperation/putka-bez-glutenu.png";

// --- TYPES & INTERFACES ---
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

// --- DATA ARRAYS ---
export const PARTNERS: PartnerItem[] = [
  { name: "Glutenex", href: "https://glutenex.pl/", src: Glutenex },
  { name: "Bezgluten", href: "https://bezgluten.pl/", src: Bezgluten },
  {
    name: "Putka bez glutenu",
    href: "https://www.putka.pl/produkty/produkty-bezglutenowe/",
    src: PutkaBezGlutenu,
  },
  { name: "Incola", href: "https://www.incola.com.pl/", src: Incola },
  { name: "Balviten", href: "https://balviten.com/", src: Balviten },
  { name: "Vallongo", href: "https://vallongo.it/pl-pl", src: Vallongo },
  { name: "Moncana", href: "https://moncana.pl/", src: Moncana },
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
