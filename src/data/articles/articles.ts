export type ArticleContentBlock =
  | string
  | {
      type: "gallery";
      title?: string;
      images: string[];
    }
  | {
      type: "instagramLink";
      url: string;
      caption: string;
    };

export interface ArticleItem {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  content: ArticleContentBlock[];
  highlights: string[];
  quote: string;
}

export const articlesData: ArticleItem[] = [
  {
    slug: "villa-karpacz-bezglutenowy-pensjonat-w-gorach",
    title:
      "Villa Karpacz Gluten Free – bezglutenowy pensjonat z wyżywieniem w górach",
    excerpt:
      "Villa Karpacz Gluten Free w Karpaczu to pensjonat z wyżywieniem i ofertą dostosowaną do diety bezglutenowej. Komfortowe pokoje, regionalne smaki i bliskość szlaków tworzą idealne warunki na relaks w Karkonoszach.",
    image: "/img/hotels/002_villa_karpacz_bezglutenu.jpg",
    category: "Podróże",
    author: "Karolina Wontorska",
    date: "02.06.2026",
    content: [
      "Villa Karpacz Gluten Free to kameralny pensjonat w samym sercu Karkonoszy, przy ul. Curie-Skłodowskiej 9A. Miejsce przyciąga wygodą, nowoczesnym wystrojem i opcją pełnego wyżywienia, dzięki czemu goście mogą skupić się na wypoczynku zamiast na gotowaniu.",
      "Obiekt oferuje 20 komfortowych pokoi z łazienkami, telewizją satelitarną oraz lodówką i czajnikiem. Dostępne są pokoje dwuosobowe oraz przestronne studia dla 5–6 osób, co sprawia, że Villa Karpacz świetnie sprawdza się zarówno dla par, rodzin jak i grup zorganizowanych.",
      "W ofercie pensjonatu znajduje się pełne wyżywienie: śniadania, obiady i obiadokolacje przygotowane z lokalnych produktów. Szczególnie ważne dla osób na diecie bezglutenowej jest to, że Villa Karpacz deklaruje możliwość dostosowania menu do indywidualnych potrzeb dietetycznych, w tym podawania bezpiecznych dań bez glutenu.",
      "Położenie willi u podnóża Śnieżki i blisko szlaku na Sowią Przełęcz zapewnia szybki dostęp do najpiękniejszych karkonoskich tras. W pobliżu są też popularne atrakcje: Świątynia Wang, Muzeum Zabawek, Krucze Skały i Dziki Wodospad, co czyni pobyt atrakcyjnym zarówno latem, jak i zimą.",
      "Dla osób, które szukają wygodnych noclegów z wyżywieniem, Villa Karpacz jest dobrym wyborem także dlatego, że możliwe są tam kompleksowe pobyty tematyczne i imprezy okolicznościowe. Obiekt przyjmuje także grupy zorganizowane, a oferta obejmuje pakiety na weekend, święta i inne okazje.",
      {
        type: "instagramLink",
        url: "https://www.instagram.com/p/DYxND-7IOBl/",
        caption:
          "Sprawdź galerię na Instagramie i zobacz więcej chwil spędzonych w Villa Karpacz Gluten Free!",
      },
    ],
    highlights: [
      "Pensjonat Villa Karpacz znajduje się przy ul. Curie-Skłodowskiej 9A, w centrum Karpacza.",
      "Obiekt oferuje 20 komfortowych pokoi, w tym pokoje dwuosobowe i studia dla 5–6 osób.",
      "Menu można dostosować do diety bezglutenowej, a pełne wyżywienie obejmuje śniadania, obiady i obiadokolacje.",
      "Villa Karpacz to idealna baza wypadowa do Śnieżki, Sowie Przełęczy, Świątyni Wang i Dzikiego Wodospadu.",
      "Pensjonat jest otwarty przez cały rok i oferuje pakiety pobytowe oraz imprezy okolicznościowe.",
    ],
    quote:
      "W Karpaczu odpoczynek nabiera smaku, gdy po górskiej wycieczce czeka na Ciebie bezglutenowy posiłek i komfortowy pokój w Villa Karpacz.",
  },
  {
    slug: "czym-jest-celiakia",
    title: "Czym jest celiakia?",
    excerpt:
      "Pełny przewodnik po celiakii: charakterystyka choroby trzewnej, objawy, gluten i metody leczenia. Poznaj podstawowe informacje o tej chorobie autoimmunologicznej.",
    image: "/img/articles/article-celiac.jpg",
    category: "Celiakia",
    author: "Karolina Wontorska",
    date: "29.05.2026",
    content: [
      "Celiakia, inaczej zwana chorobą trzewną, ma podłoże genetyczne i zaliczana jest do grupy chorób autoimmunologicznych. W układzie odpornościowym osoby chorej, po spożyciu glutenu dochodzi do niepożądanej reakcji immunologicznej. Mówiąc najprościej, reakcja ta jest skierowana przeciwko własnym tkankom organizmu chorego.",
      "Największe szkody zachodzą w jelicie cienkim, co prowadzi do stanu zapalnego jelit, zaniku kosmków jelitowych, co w następstwie ogranicza lub uniemożliwia wchłanianie składników odżywczych z pokarmów. Jednak oprócz jelita cienkiego, na niszczycielskie działanie glutenu narażone są również inne narządy chorego.",
      "Gluten jest mieszaniną białek (prolamin i glutenin) charakterystycznych dla produktów zbożowych takich jak np.: pszenica, żyto, jęczmień, orkisz, owies.",
      "Objawy celiakii nie są jednoznaczne i oczywiste. Celiakia może mieć postać klasyczną i nieklasyczną. W przypadku tej pierwszej charakterystycznymi objawami są m.in.: biegunki, utrata masy ciała, zaburzenia rozwoju, niski wzrost, wzdęty brzuch, ból brzucha.",
      "W przypadku celiakii nieklasycznej (która jest spotykana znacznie częściej), objawy zaliczane są głównie do tych pozajelitowych m.in. anemia, afty, zaburzenia neurologiczne, depresja, psychozy, bóle kostne i stawowe, poronienia i problemy z płodnością, współistniejące choroby autoimmunologiczne, niedobór witamin i składników mineralnych.",
      "Niestety celiakia jest nieuleczalna. Jedyną metodą leczenia dla chorego jest stosowanie ścisłej diety bezglutenowej przez całe życie.",
      "Choroby autoimmunologiczne mogą pojawiać się parami lub grupami, w każdym momencie życia. Przy celiakii mogą pojawić się inne choroby autoimmunologiczne, dlatego warto monitorować swoje zdrowie i być w stałym kontakcie z lekarzem.",
    ],
    highlights: [
      "Celiakia to choroba autoimmunologiczna o podłożu genetycznym, w której gluten uruchamia reakcję odpornościową.",
      "Największe szkody zachodzą w jelicie cienkim, uniemożliwiając wchłanianie składników odżywczych.",
      "Objawy celiakii mogą być klasyczne (biegunki, utrata wagi) lub nieklasyczne (anemia, zaburzenia neurologiczne, problemy z płodnością).",
      "Jedynym leczeniem celiakii jest ścisła, całkowita dieta bezglutenowa przez całe życie.",
      "Osoby z celiakią mogą mieć również inne choroby autoimmunologiczne, które pojawiają się w różnych momentach życia.",
    ],
    quote:
      "Celiakia nie jest wyrokiem, lecz zaproszeniem do świadomego i zdrowego życia.",
  },
  {
    slug: "pierwsze-kroki-z-celiakia",
    title: "Pierwsze kroki z celiakią i dietą bezglutenową",
    excerpt:
      "Przewodnik dla początkujących: czym jest celiakia, jak rozpoznać gluten i jak bezpiecznie rozpocząć dietę bezglutenową.",
    image: "/img/recipes/breakfasts/003_sniadaniowa_tortilla_z_jajkiem.jpg",
    category: "Celiakia",
    author: "Karolina Wontorska",
    date: "29.05.2026",
    content: [
      "Celiakia to choroba autoimmunologiczna, w której spożycie glutenu uruchamia reakcję odpornościową wewnątrz organizmu. Największe szkody powstają w jelicie cienkim, dlatego szybka zmiana diety jest kluczowa dla zdrowia.",
      "Gluten występuje w pszenicy, żytnim, jęczmieniu i orkiszach. Nawet owies musi być oznaczony jako bezglutenowy, ponieważ często zawiera śladowe ilości glutenu z zanieczyszczeń produkcyjnych.",
      "Objawy celiakii mogą być bardzo różne. Klasyczna postać objawia się biegunkami, wzdęciami i utratą masy ciała, a nieklasyczna może dawać objawy pozajelitowe: anemię, afty, bóle kostne, zaburzenia neurologiczne czy problemy z płodnością.",
      "Niestety celiakia nie jest uleczalna. Jedyną skuteczną metodą leczenia jest ścisła, całkowicie bezglutenowa dieta przez całe życie.",
      "Przy celiakii mogą pojawić się inne choroby autoimmunologiczne. Dlatego warto monitorować swoje zdrowie, współpracować z lekarzem i dietetykiem oraz być świadomym sygnałów wysyłanych przez organizm.",
    ],
    highlights: [
      "Usuń z diety wszystkie źródła glutenu i wybieraj produkty certyfikowane jako bezglutenowe.",
      "Czytaj etykiety i ucz się alternatywnych nazw glutenu.",
      "Pamiętaj, że jedynym leczeniem celiakii jest ścisła dieta bezglutenowa.",
      "Obserwuj swoje ciało i konsultuj się z lekarzem oraz dietetykiem przy zmianie diety.",
    ],
    quote:
      "Rozpoczęcie diety bezglutenowej to inwestycja w zdrowie — najważniejsze, żeby robić to krok po kroku i z rozsądkiem.",
  },
  {
    slug: "bezglutenowe-podroze-gdzie-szukac-smacznych-miejsc",
    title: "Bezglutenowe podróże: gdzie szukać smacznych miejsc",
    excerpt:
      "Przegląd najlepszych restauracji i hoteli bezglutenowych oraz praktyczne wskazówki na wyjazdach.",
    image: "/img/restaurants/poland/001_saska_sushi.jpg",
    category: "Podróże",
    author: "Karolina Wontorska",
    date: "20.05.2026",
    content: [
      "Podróżując, warto wcześniej sprawdzić ofertę restauracji i hoteli pod kątem bezglutenowych opcji.",
      "Aplikacje oraz grupy społecznościowe potrafią pomóc w znalezieniu miejsc, które serwują bezpieczne dania bez glutenu.",
      "Na miejscu pytaj obsługę o sposób przygotowania potraw oraz o możliwość uniknięcia szkód krzyżowych.",
      "Czasami najlepsze miejsca to te, gdzie szef kuchni sam chętnie podzieli się wiedzą na temat składników i sposobów przygotowania.",
    ],
    highlights: [
      "Wybieraj miejsca z certyfikacją lub wyraźnymi informacjami o bezglutenowej kuchni.",
      "Zawsze pytaj o schemat przygotowania posiłku i czystość kuchni.",
      "Sprawdzaj menu online przed wyjazdem.",
      "Bądź gotowy na propozycje domowych alternatyw lub zmiany składników.",
    ],
    quote:
      "Podróżowanie bez glutenu to świetna przygoda, jeśli tylko dobrze przygotujesz się na drodze.",
  },
  {
    slug: "przepis-na-szybki-obiad-bez-glutenu",
    title: "Przepis na szybki obiad bez glutenu",
    excerpt:
      "Przepis na prosty, pełnowartościowy bezglutenowy obiad z wykorzystaniem popularnych składników.",
    image: "/img/recipes/dinners/016_bezglutenowy_burger_z_kimchi.jpg",
    category: "Kuchnia",
    author: "Karolina Wontorska",
    date: "24.05.2026",
    content: [
      "Szybki obiad bez glutenu może być smaczny i odżywczy. Kluczem jest wykorzystanie naturalnych składników i prostych zamienników.",
      "Zacznij od wyboru bezglutenowego mięsa, świeżych warzyw oraz naturalnych przypraw.",
      "Do sosu użyj bezglutenowego tamari lub sosu sojowego oznaczonego jako bezglutenowy.",
      "Taki obiad przygotujesz w mniej niż 30 minut, a jednocześnie będziesz mieć pewność, że jest bezpieczny dla diety.",
    ],
    highlights: [
      "Użyj bezglutenowego pieczywa lub sałatki zamiast bułek.",
      "Warianty z kaszą jaglaną lub ryżem są bardzo proste do przygotowania.",
      "Przygotuj na zapas sosy i marynaty bez glutenu.",
      "Przemyśl dodatki, aby danie było lekkie i pełne smaku.",
    ],
    quote:
      "Dobry obiad bez glutenu to nie tylko zamiennik, lecz prawdziwa kulinarna przyjemność.",
  },
  {
    slug: "czytanie-etykiet-bez-glutenu",
    title: "Jak czytać etykiety bezglutenowych produktów",
    excerpt:
      "Naucz się rozpoznawać ukryte źródła glutenu i wybierać produkty bezpieczne dla celiakii.",
    image: "/img/articles/article-reading-labels.jpg",
    category: "Porady",
    author: "Karolina Wontorska",
    date: "28.05.2026",
    content: [
      "Etykiety potrafią być mylące, ale kilka prostych zasad pozwoli Ci odczytać skład i potencjalne zagrożenia glutenowe.",
      'Zwracaj uwagę nie tylko na deklaracje "bezglutenowy", ale także na symbole i informacje o możliwym zanieczyszczeniu krzyżowym.',
      "Unikaj produktów z nieznanymi składnikami i dodatkami, które mogą ukrywać śladowe ilości glutenu.",
      "Wybierając certyfikowane bezglutenowe marki, masz większą pewność, że produkt spełnia normy dla osób z celiakią.",
    ],
    highlights: [
      "Sprawdzaj składniki każdej nowej paczki produktu.",
      "Zwracaj uwagę na informacje o produkcji w tym samym zakładzie.",
      "Czytaj etykiety z uwagą, zwracając uwagę na alergeny.",
      'Wybieraj produkty z certyfikatem i wyraźnym oznaczeniem "bezglutenowy".',
    ],
    quote:
      "Czytanie etykiet to umiejętność, która daje największe bezpieczeństwo na diecie bezglutenowej.",
  },
  {
    slug: "bezglutenowe-sniadanie-na-caly-tydzien",
    title: "Bezglutenowe śniadanie na cały tydzień",
    excerpt:
      "Pomysły na szybkie, zdrowe i sycące śniadania bez glutenu, które ułatwią codzienne poranki.",
    image: "/img/recipes/breakfasts/003_sniadaniowa_tortilla_z_jajkiem.jpg",
    category: "Kuchnia",
    author: "Karolina Wontorska",
    date: "29.05.2026",
    content: [
      "Śniadanie jest podstawą dobrego dnia, szczególnie na diecie bezglutenowej. Warto mieć kilka gotowych pomysłów na szybkie posiłki.",
      "Proste mieszanki bezglutenowe, świeże owoce i warzywa oraz pełnowartościowe białko to najlepsza baza na śniadanie.",
      {
        type: "gallery",
        title: "Galeria bezglutenowych śniadań",
        images: [
          "/img/recipes/breakfasts/001_sniadanie_boczek_z_jajkiem.jpg",
          "/img/recipes/breakfasts/003_sniadaniowa_tortilla_z_jajkiem.jpg",
          "/img/recipes/breakfasts/006_zielony_bajgel.jpg",
          "/img/recipes/breakfasts/007_omlet_z_maki_gryczanej_i_jajek.jpg",
          "/img/recipes/breakfasts/011_owsianka_z_matcha.jpg",
          "/img/recipes/breakfasts/013_zapiekane_bulki_sniadaniowe.jpg",
        ],
      },
      "Możesz przygotować weekendowe porcje i zamrozić je na dni, kiedy brakuje Ci czasu.",
      "Wykorzystaj talerz pełen kolorów i różnorodnych tekstur, aby poranna kawa miała idealne, zdrowe wsparcie.",
    ],
    highlights: [
      "Przygotuj rano owsiankę z bezglutenowych płatków i ulubionych dodatków.",
      "Zamarynuj warzywa i podawaj je z jajkiem lub hummusem.",
      "Wykorzystaj bezglutenowe pieczywo lub placki jako bazę do kanapek.",
      "Planowanie rano pomaga zaoszczędzić czas i zachować zdrowy rytm dnia.",
    ],
    quote:
      "Dobre śniadanie to pierwszy krok do dnia pełnego energii, nawet bez glutenu.",
  },
];
